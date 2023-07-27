import { TodoItem } from "../TodoItem/TodoItem"

type TodosProps = {
  items: string[]
}

export const Todos = ({ items }: TodosProps) => {
  return (
    <ul>
      {items.map((item) => (
        <TodoItem key={item} text={item} />
      ))}
    </ul>
  )
}
