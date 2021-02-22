/** @format */

import {useDrag} from 'react-dnd'
import {ItemTypes} from './types'

const useDragMethod = (
  id: string,
  name: string,
  type: ItemTypes,
  folderId?: string,
) => {
  const [, drag] = useDrag({
    item: {
      type,
      id,
      name,
      folderId,
    },
  })

  return {drag}
}

export default useDragMethod
