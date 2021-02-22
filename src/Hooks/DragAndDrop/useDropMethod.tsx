/** @format */

import {useDrop} from 'react-dnd'
import {ItemTypes} from './types'

const useDropMethod = () => {
  const {folder, product} = ItemTypes
  const [, drop] = useDrop({
    accept: [folder, product],
  })

  return {drop}
}

export default useDropMethod
