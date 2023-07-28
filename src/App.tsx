import styles from "./App.module.scss"
import { Routes, Route } from "react-router-dom"
import { Landing } from "./components/Landing"
import { Planning } from "./components/Planning"
// import Results from "./components/Results";

function App() {
  // const [currentView, setCurrentView] = useState("landing")
  // const [result, setResult] = useState("");

  return (
    // To avoid using extra libraries like react-router-dom I used a ternary condition
    // to check the property of the currentView and load the appropriate view component
    <div className={styles.App}>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/planning" element={<Planning />} />
        <Route path="/result" element={null} />
      </Routes>
    </div>
  )
}

export default App
