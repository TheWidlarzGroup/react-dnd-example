/** @format */

import {FC, useRef} from 'react'
import useDragMethod from '../Hooks/DragAndDrop/useDragMethod'
import {ItemTypes} from '../Hooks/DragAndDrop/types'

interface Props {
  id: string
  name: string
  type: ItemTypes
  index: number
}

const ProductUpperListContainer: FC<Props> = ({id, name, type, index}) => {
  const itemRef = useRef<HTMLDivElement>(null)

  const {drag} = useDragMethod(id, name, type, index)

  drag(itemRef)
  return (
    <div
      className="w-1/4 border border-gray-400 border-solid rounded-full flex justify-center items-center"
      ref={itemRef}>
      {name}
    </div>
  )
}

export default ProductUpperListContainer
