import { useState } from "react"
import { usePostcodes } from "../../contexts/PostcodesContext"
import { useResult } from "../../contexts/ResultContext"
import { useNavigate } from "react-router-dom"
import btnStyles from "../../styles/Button.module.scss"
import { Header } from "../Header"
import { StartingPoint } from "../StartingPoint"
import { ListPostcodes } from "../ListPostcodes"
import { TravelMode } from "../TravelMode"
import { Spinner } from "../../assets/Spinner/Spinner"

export const Planning = () => {
  const { postcodes } = usePostcodes()
  const [travelMode, setTravelMode] = useState("Driving")
  const [hasLoaded, setHasLoaded] = useState(true)
  const { setResult } = useResult()
  const navigate = useNavigate()

  const handleClick = (event: React.MouseEvent) => {
    postcodes.length === 1 ? event.preventDefault() : calculateJourney()
  }

  // Remove space from the middle of postcode and add %20 for API fetching
  const parsePostcodes = () => {
    return postcodes.map((postcode) => {
      const newPostcode = postcode.split("")
      newPostcode.splice(-4, 1, "%20")
      return newPostcode.join("")
    })
  }

  // API fetch with async
  const calculateJourney = async () => {
    setHasLoaded(false)
    const parsed = parsePostcodes()
    try {
      const response = await fetch(
        `https://media.carecontrolsystems.co.uk/Travel/JourneyPlan.aspx?Route=${parsed.toString()}&Format=Miles&TravelMode=${travelMode}&TrafficModel=best_guess`
      )
      const data = await response.text()
      validateResult(data)
    } catch (error) {
      console.log(error)
    }
  }

  // Check to see if the result has the correct expected length
  const validateResult = (data: string) => {
    // Split the result string into an array and remove the empty element at the end
    const parsed = data.split(";").slice(0, -1)

    parsed.length === postcodes.length - 1 ? setResult(parsed) : setResult(null)
    setHasLoaded(true)
    navigate("/result")
  }

  return (
    <div>
      <Header />
      {!postcodes.length ? (
        <StartingPoint />
      ) : (
        <div>
          {hasLoaded ? (
            <div>
              <TravelMode
                travelMode={travelMode}
                setTravelMode={setTravelMode}
              />
              <ListPostcodes />
              <button
                className={`${btnStyles.Button} ${
                  postcodes.length === 1 ? btnStyles.Grey : btnStyles.Green
                }`}
                // When user clicks button currentView updates to results and trigers component reload
                onClick={handleClick}
              >
                Calculate journey
              </button>

              <button
                className={`${btnStyles.Button} ${btnStyles.Black}`}
                // When user clicks button currentView updates to landing and trigers component reload
                onClick={() => navigate("/")}
              >
                Start Over
              </button>
            </div>
          ) : (
            <Spinner />
          )}
        </div>
      )}
    </div>
  )
}
