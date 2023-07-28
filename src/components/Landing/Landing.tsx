import styles from "../../styles/Landing.module.scss"
import btnStyles from "../../styles/Button.module.scss"
import { useNavigate } from "react-router-dom"

export const Landing = () => {
  const navigate = useNavigate()
  return (
    <div>
      <header className={styles.LandingHeader}>
        <img
          src="https://res.cloudinary.com/andrebraga7/image/upload/v1687535779/logo_j8yrk1.jpg"
          alt="where to logo"
          className={styles.Logo}
        ></img>
        <h1 className={styles.LogoH1}>WhereTo?</h1>
      </header>
      <main>
        <button
          className={`${btnStyles.Button} ${btnStyles.Green}`}
          // When user clicks button currentView updates to planning and trigers component reload
          onClick={() => navigate("/planning")}
        >
          Start Journey
        </button>
      </main>
    </div>
  )
}
