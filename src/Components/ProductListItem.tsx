/** @format */

import {FC, useRef} from 'react'
import {ItemTypes} from '../Hooks/DragAndDrop/types'
import useMain from '../Hooks/useMain'
import useDragMethod from '../Hooks/DragAndDrop/useDragMethod'

interface Props {
  id: string
  name: string
  type: ItemTypes
  index: number
  folderId?: string
}

const ProductListItem: FC<Props> = ({id, name, type}) => {
  const {setActiveFolder} = useMain()

  const isFolder = type === ItemTypes.folder

  const itemRef = useRef<HTMLDivElement>(null)
  const {drag} = useDragMethod(type)

  drag(itemRef)

  return (
    <div
      className={`w-full border border-solid border-gray-300 py-4 px-6 flex justify-between `}
      onClick={() => isFolder && setActiveFolder(id)}
      ref={itemRef}>
      {name}
      <span>=</span>
    </div>
  )
}

export default ProductListItem
