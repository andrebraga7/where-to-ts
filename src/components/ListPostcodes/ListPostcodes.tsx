import { useEffect, useState } from "react"
import { formatPostcode } from "../../utils"
import { usePostcodes } from "../../contexts/PostcodesContext"
import styles from "../../styles/ListPostcodes.module.scss"
import btnStyles from "../../styles/Button.module.scss"
import { Postcode } from "../Postcode"

export const ListPostcodes = () => {
  const { postcodes, setPostcodes } = usePostcodes()
  const [newStop, setNewStop] = useState("")

  // Iterate throught the postcodes array and add an option tag
  const selectOptions = postcodes.map((postcode, currentIndex) => [
    <option key={currentIndex} value={currentIndex}>
      {currentIndex + 1}
    </option>,
  ])

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const formattedPostcode = formatPostcode(newStop)
    setPostcodes((prevPostcodes) => [...prevPostcodes, formattedPostcode])
  }

  // Will reset the add stop input when a new stop is added to the postcodes array
  useEffect(() => {
    setNewStop("")
  }, [postcodes])

  return (
    <div className={styles.OuterBox}>
      <h2 className={styles.SubHeading}>Please add your stops</h2>
      <div>
        <div className={styles.Container}>
          {/* Iterate through all the postcodes */}
          {postcodes.map((postcode, index) => (
            <Postcode
              key={index}
              postcode={postcode}
              index={index}
              selectOptions={selectOptions}
            />
          ))}
        </div>

        {/* Simple form that takes the postcode and adds it to the postcodes array */}
        <form onSubmit={handleSubmit}>
          <div className={styles.Container}>
            <div className={styles.ListItem}>
              <div className={styles.Plus}>
                <i className="fa-solid fa-plus"></i>
              </div>
              <input
                className={styles.Input}
                name="postcode"
                placeholder="Enter postcode"
                value={newStop}
                onChange={(event) =>
                  setNewStop(event.target.value.toUpperCase())
                }
                pattern="^[A-Za-z][A-Za-z0-9]{2,3}(?:\s?[0-9][A-Za-z0-9]{2})$"
                title="Valid postcodes must be A123 1AB or AB1 1AB"
                maxLength={8}
                required
              />
            </div>
          </div>
          <button className={btnStyles.ButtonInput} type="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  )
}
