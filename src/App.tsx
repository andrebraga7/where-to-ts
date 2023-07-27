import { useState } from "react"
import "./App.module.scss"
import { AddItem } from "./components/AddItem"
import { Todos } from "./components/Todos"

function App() {
  const [items, setItems] = useState<string[]>([])

  return (
    <>
      <AddItem setItems={setItems} />
      <Todos items={items} />
    </>
  )
}

export default App
