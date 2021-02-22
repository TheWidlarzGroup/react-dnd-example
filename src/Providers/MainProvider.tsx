/** @format */

import {Dispatch, FC, memo, ReactNode, SetStateAction, useState} from 'react'
import {MainContext} from '../Contexts/MainContext'

interface Props {
  children: ReactNode
}

export interface MainContextType {
  activeFolder: string | null
  setActiveFolder: Dispatch<SetStateAction<string | null>>
  changeActiveFolder: (id: string) => void
}

const MainProvider: FC<Props> = ({children}) => {
  const [activeFolder, setActiveFolder] = useState<string | null>(null)

  const changeActiveFolder = (id: string) => {
    setActiveFolder(id)
  }

  return (
    <MainContext.Provider
      value={{activeFolder, setActiveFolder, changeActiveFolder}}>
      {children}
    </MainContext.Provider>
  )
}

export default memo(MainProvider)
