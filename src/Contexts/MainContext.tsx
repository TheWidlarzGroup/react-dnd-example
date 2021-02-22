/** @format */

import {createContext} from 'react'
import {MainContextType} from '../Providers/MainProvider'

export const MainContext = createContext<MainContextType | null>(null)
