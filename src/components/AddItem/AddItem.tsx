import { Dispatch, SetStateAction, useEffect, useRef } from "react"

type AddItemProps = {
  setItems: Dispatch<SetStateAction<string[]>>
}

export const AddItem = ({ setItems }: AddItemProps) => {
  const inputText = useRef<HTMLInputElement | null>(null)

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    setItems((prevItems) => [...prevItems, inputText.current!.value])
  }

  useEffect(() => {
    inputText.current!.value = ""
  })

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input">Add Item:</label>
        <input id="input" type="text" ref={inputText} />
        <button type="submit">Add Item</button>
      </form>
    </>
  )
}
