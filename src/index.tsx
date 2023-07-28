import ReactDOM from "react-dom/client"
import "./index.module.scss"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import { PostcodesContextProvider } from "./contexts/PostcodesContext"

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
root.render(
  <BrowserRouter>
    <PostcodesContextProvider>
      <App />
    </PostcodesContextProvider>
  </BrowserRouter>
)
