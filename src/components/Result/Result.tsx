import { useResult } from "../../contexts/ResultContext"
import { usePostcodes } from "../../contexts/PostcodesContext"
import { useNavigate } from "react-router-dom"
import { minutesToHours } from "../../utils"
import { Header } from "../Header"

// Styles
import styles from "../../styles/Results.module.scss"
import btnStyles from "../../styles/Button.module.scss"

export const Result = () => {
  const { result } = useResult()
  const { setPostcodes } = usePostcodes()
  const navigate = useNavigate()

  const totalMinutesArray: number[] = []
  const totalDistanceArray: number[] = []

  if (result) {
    result.map((item) => {
      const newItem = item.split(",")
      totalMinutesArray.push(parseInt(newItem[0]))
      totalDistanceArray.push(parseFloat(newItem[1]))
      return null
    })
  }

  const totalMinutes = totalMinutesArray.reduce((acc, curr) => acc + curr, 0)
  const totalDistance = totalDistanceArray.reduce((acc, curr) => acc + curr, 0)
  const totalTime = minutesToHours(totalMinutes)

  const startOver = () => {
    setPostcodes([])
    navigate("/")
  }

  return (
    <div>
      <Header />

      {result ? (
        <div className={styles.Container}>
          <h2 className={styles.SubHeading}>Your total travel distance is:</h2>
          <i className={`${styles.Icon} fa-regular fa-map`}></i>
          <p className={styles.Results}>{totalDistance} miles</p>

          <h2 className={styles.SubHeading}>Your total travel time is:</h2>
          <i className={`${styles.Icon} fa-regular fa-clock`}></i>
          {totalTime.hours === 0 ? (
            <p className={styles.Results}>{totalMinutes} minutes</p>
          ) : (
            <p className={styles.Results}>
              {totalTime.hours} hours and {totalTime.minutes} minutes
            </p>
          )}
        </div>
      ) : (
        <div className={styles.Container}>
          <i
            className={`${styles.Triangle} fa-solid fa-triangle-exclamation`}
          ></i>
          <p>Oh dear! We seam to have a flat tyre...</p>
          <p>Please verify that all postcodes are valid and try again</p>
        </div>
      )}

      <button
        className={`${btnStyles.Button} ${btnStyles.Black}`}
        onClick={startOver}
      >
        Start Over
      </button>
    </div>
  )
}
