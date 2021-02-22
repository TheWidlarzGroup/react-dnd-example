/** @format */

import {useDrag} from 'react-dnd'
import {ItemTypes} from './types'

const useDragMethod = (type: ItemTypes) => {
  const [, drag] = useDrag({
    item: {
      type,
    },
  })

  return {drag}
}

export default useDragMethod
