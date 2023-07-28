import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react"

type ResultType = {
  result: string[]
  setResult: Dispatch<SetStateAction<string[]>>
}

export const ResultContext = createContext<ResultType>({
  result: [],
  setResult: () => {},
})

export const useResult = () => useContext(ResultContext)

export const ResultContextProvider = ({ children }: any) => {
  const [result, setResult] = useState<string[]>([])

  return (
    <ResultContext.Provider value={{ result, setResult }}>
      {children}
    </ResultContext.Provider>
  )
}
