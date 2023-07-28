import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react"

type ResultType = {
  result: string[] | boolean
  setResult: Dispatch<SetStateAction<string[] | boolean>>
}

export const ResultContext = createContext<ResultType>({
  result: [],
  setResult: () => {},
})

export const useResult = () => useContext(ResultContext)

export const ResultContextProvider = ({ children }: any) => {
  const [result, setResult] = useState<string[] | boolean>([])

  return (
    <ResultContext.Provider value={{ result, setResult }}>
      {children}
    </ResultContext.Provider>
  )
}
