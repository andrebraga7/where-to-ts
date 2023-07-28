import { Dispatch, SetStateAction } from "react"
import styles from "../../styles/TravelMode.module.scss"

type TravelModeType = {
  travelMode: string
  setTravelMode: Dispatch<SetStateAction<string>>
}

export const TravelMode = ({ travelMode, setTravelMode }: TravelModeType) => {
  return (
    <div className={styles.FlexContainer}>
      <div
        id="Driving"
        className={`${styles.TravelIcon} ${
          travelMode === "Driving" ? styles.Active : ""
        }`}
        onClick={() => setTravelMode("Driving")}
      >
        <i className="fa-solid fa-car"></i>
      </div>
      <div
        id="Walking"
        className={`${styles.TravelIcon} ${
          travelMode === "Walking" ? styles.Active : ""
        }`}
        onClick={() => setTravelMode("Walking")}
      >
        <i className="fa-solid fa-person-walking"></i>
      </div>
      <div
        id="Bicycling"
        className={`${styles.TravelIcon} ${
          travelMode === "Bicycling" ? styles.Active : ""
        }`}
        onClick={() => setTravelMode("Bicycling")}
      >
        <i className="fa-solid fa-person-biking"></i>
      </div>
    </div>
  )
}
