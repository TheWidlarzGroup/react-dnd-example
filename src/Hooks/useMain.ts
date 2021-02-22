/** @format */

import {useContext} from 'react'
import {MainContext} from '../Contexts/MainContext'

const useMain = () => {
  const mainContext = useContext(MainContext)

  if (!mainContext) {
    throw Error('You must use this hook in context scope')
  }

  return mainContext
}

export default useMain
