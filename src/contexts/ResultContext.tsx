import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react"

type ResultType = {
  result: string[] | null
  setResult: Dispatch<SetStateAction<string[] | null>>
}

export const ResultContext = createContext<ResultType>({
  result: [],
  setResult: () => {},
})

export const useResult = () => useContext(ResultContext)

export const ResultContextProvider = ({ children }: any) => {
  const [result, setResult] = useState<string[] | null>([])

  return (
    <ResultContext.Provider value={{ result, setResult }}>
      {children}
    </ResultContext.Provider>
  )
}
