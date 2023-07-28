import styles from "./App.module.scss"
import { Routes, Route } from "react-router-dom"
import { Landing } from "./components/Landing"
import { Planning } from "./components/Planning"
import { Result } from "./components/Result"

function App() {
  return (
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/planning" element={<Planning />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  )
}

export default App
