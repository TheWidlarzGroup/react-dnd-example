/** @format */

import {FC, useRef} from 'react'
import {Dropzones, ItemTypes} from '../Hooks/DragAndDrop/types'
import useMain from '../Hooks/useMain'
import useDragMethod from '../Hooks/DragAndDrop/useDragMethod'
import useDropMethod from '../Hooks/DragAndDrop/useDropMethod'
import useHoverMethod from '../Hooks/DragAndDrop/useHoverMethod'

interface Props {
  id: string
  name: string
  type: ItemTypes
  index: number
  folderId?: string
}

const ProductListItem: FC<Props> = ({id, name, type, folderId, index}) => {
  const {setActiveFolder} = useMain()

  const isFolder = type === ItemTypes.folder
  const location = isFolder ? Dropzones.left : Dropzones.right

  const itemRef = useRef<HTMLDivElement>(null)
  const {drag} = useDragMethod(id, name, type, index, folderId)
  const {drop} = useDropMethod(location, isFolder ? id : undefined)
  const {drop: hoverDrop} = useHoverMethod(itemRef, index, location)

  drag(drop(hoverDrop(itemRef)))

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
