import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react"

type PostcodesType = {
  postcodes: string[]
  setPostcodes: Dispatch<SetStateAction<string[]>>
}

export const PostcodesContext = createContext<PostcodesType>({
  postcodes: [],
  setPostcodes: () => {},
})

export const usePostcodes = () => useContext(PostcodesContext)

export const PostcodesContextProvider = ({ children }: any) => {
  const [postcodes, setPostcodes] = useState<string[]>([])

  return (
    <PostcodesContext.Provider value={{ postcodes, setPostcodes }}>
      {children}
    </PostcodesContext.Provider>
  )
}
