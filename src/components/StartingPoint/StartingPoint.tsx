import { useState } from "react"
import styles from "../../styles/StartingPoint.module.scss"
import btnStyles from "../../styles/Button.module.scss"
import { formatPostcode } from "../../utils"

export const StartingPoint = () => {
  const [startingPoint, setStartingPoint] = useState("")

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const formattedPostcode = formatPostcode(startingPoint)
    console.log(formattedPostcode)
    // setPostcodes([formattedPostcode])
  }

  return (
    <div>
      <h2 className={styles.SubHeading}>
        Please enter your starting point postcode to get started.
      </h2>

      {/* Simple form that takes the starting point postcode and adds it as the first intem of the postcodes array */}
      <form onSubmit={handleSubmit}>
        <input
          className={styles.Input}
          name="postcode"
          placeholder="Enter postcode"
          value={startingPoint}
          onChange={(event) =>
            setStartingPoint(event.target.value.toUpperCase())
          }
          pattern="^[A-Za-z][A-Za-z0-9]{2,3}(?:\s?[0-9][A-Za-z0-9]{2})$"
          title="Valid postcodes must be A123 1AB or AB1 1AB"
          maxLength={8}
          required
        />
        <button
          className={`${btnStyles.Button} ${btnStyles.Green}`}
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  )
}
