/** @format */

import {useDrop} from 'react-dnd'
import {ItemTypes} from './types'

const useDropMethod = () => {
  const {folder, product} = ItemTypes
  const [, drop] = useDrop({
    accept: [folder, product],
    drop: item => {
      console.log(item, 'dragged element')
    },
  })

  return {drop}
}

export default useDropMethod
