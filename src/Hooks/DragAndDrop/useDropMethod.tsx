/** @format */

import {useDrop} from 'react-dnd'
import {ItemTypes} from './types'

const useDropMethod = (location: string) => {
  const {folder, product} = ItemTypes
  const [, drop] = useDrop({
    accept: [folder, product],
    drop: (item, monitor) => {
      if (monitor.didDrop()) return
      console.log(item, 'dragged element')
      console.log(location, 'location')
    },
  })

  return {drop}
}

export default useDropMethod
