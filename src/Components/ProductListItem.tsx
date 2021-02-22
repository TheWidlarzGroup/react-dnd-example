/** @format */

import {FC} from 'react'
import {ItemTypes} from '../Hooks/DragAndDrop/types'
import useMain from '../Hooks/useMain'

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

  return (
    <div
      className={`w-full border border-solid border-gray-300 py-4 px-6 flex justify-between `}
      onClick={() => isFolder && setActiveFolder(id)}>
      {name}
      <span>=</span>
    </div>
  )
}

export default ProductListItem
