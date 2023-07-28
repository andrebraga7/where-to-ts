import React, { ReactNode, useState } from "react"
import styles from "../../styles/Postcode.module.scss"
import btnStyles from "../../styles/Button.module.scss"
import { formatPostcode } from "../../utils"
import { usePostcodes } from "../../contexts/PostcodesContext"

type PostcodeType = {
  postcode: string
  index: number
  selectOptions: ReactNode
}

export const Postcode = ({ postcode, index, selectOptions }: PostcodeType) => {
  // useState definitions
  const { postcodes, setPostcodes } = usePostcodes()
  const [edit, setEdit] = useState(false)
  const [editPostcode, setEditPostcode] = useState(postcode)

  // Event handlers
  const handleDelete = () => {
    setPostcodes((prevPostcodes) =>
      prevPostcodes.filter(
        (postcode: string, currentIndex: number) => currentIndex !== index
      )
    )
  }

  const handleEdit = (event: React.FormEvent) => {
    event.preventDefault()
    const formattedPostcode = formatPostcode(editPostcode)

    setEditPostcode(formattedPostcode)

    setPostcodes((prevPostcodes) =>
      prevPostcodes.map((postcode, currentIndex) => {
        return currentIndex === index ? formattedPostcode : postcode
      })
    )
    setEdit(false)
  }

  const handleChange = (event: React.FormEvent<HTMLSelectElement>) => {
    const newIndex = Number(event.currentTarget.value)
    handleReorder(newIndex, index, postcodes)
  }

  const handleReorder = (
    newIndex: number,
    oldIndex: number,
    array: string[]
  ) => {
    const selectedItem = array[oldIndex]
    const remainingItems = array.filter((item, index) => index !== oldIndex)

    const reorderedItems = [
      ...remainingItems.slice(0, newIndex),
      selectedItem,
      ...remainingItems.slice(newIndex),
    ]

    setPostcodes(reorderedItems)
  }

  return (
    <div key={index} className={styles.ListItem}>
      {/* Display different icon if it's the first postcode of the list */}
      <div className={styles.SideIcon}>
        {index === 0 ? (
          <i className={`${styles.Dot} fa-solid fa-circle`}></i>
        ) : (
          <div className={styles.Square}>{index + 1}</div>
        )}
      </div>

      {edit ? (
        <form className={styles.PostcodeBox} onSubmit={handleEdit}>
          <input
            className={styles.EditInput}
            name="postcode"
            value={editPostcode}
            onChange={(event) =>
              setEditPostcode(event.target.value.toUpperCase())
            }
            pattern="^[A-Za-z][A-Za-z0-9]{2,3}(?:\s?[0-9][A-Za-z0-9]{2})$"
            title="Valid postcodes must be A123 1AB or AB1 1AB"
            maxLength={8}
            required
            autoFocus
          />
          <button className={btnStyles.ButtonDone} type="submit">
            Done
          </button>
        </form>
      ) : (
        <div className={styles.PostcodeBox}>
          <span>{postcode}</span>
          <div>
            <i
              className={`${styles.EditIcon} fa-regular fa-pen-to-square`}
              onClick={() => setEdit(true)}
            ></i>
            <select
              className={styles.SelectDropdown}
              name="order"
              value={index}
              onChange={handleChange}
            >
              {selectOptions}
            </select>
          </div>
        </div>
      )}
      <div className={styles.Delete} onClick={handleDelete}>
        <i className="fa-solid fa-xmark"></i>
      </div>
    </div>
  )
}
