import { useResult } from "../../contexts/ResultContext"
import { useNavigate } from "react-router-dom"
import styles from "../../styles/Results.module.scss"
import btnStyles from "../../styles/Button.module.scss"
import { Header } from "../Header"

export const Result = () => {
  const { result } = useResult()
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

  // Convert total minutes into hours and minutes
  const totalHoursMinutes = (time: number) => {
    const hours = Math.floor(time / 60)
    const minutes = time % 60
    return { hours, minutes }
  }

  const totalTime = totalHoursMinutes(totalMinutes)

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
        // When user clicks button currentView updates to landing and trigers component reload
        onClick={() => navigate("/")}
      >
        Start Over
      </button>
    </div>
  )
}
