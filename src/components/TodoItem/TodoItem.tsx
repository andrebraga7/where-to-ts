type TodoProps = {
  text: string
}

export const TodoItem = ({ text }: TodoProps) => {
  return <li>{text}</li>
}
