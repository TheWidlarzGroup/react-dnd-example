/** @format */

import ProductListItem from '../Components/ProductListItem'
import useApi from '../Hooks/Api/useApi'
import useMain from '../Hooks/useMain'
import {Dropzones, ItemTypes} from '../Hooks/DragAndDrop/types'
import {useRef} from 'react'
import useDropMethod from '../Hooks/DragAndDrop/useDropMethod'

const RightSide = () => {
  const {activeFolder} = useMain()
  const {
    getProductsInFolder: {data},
  } = useApi(activeFolder)

  const itemRef = useRef<HTMLDivElement>(null)
  const {drop} = useDropMethod(Dropzones.right, activeFolder ?? undefined)

  drop(itemRef)

  return (
    <div className={`w-full`} ref={itemRef}>
      {data?.map(({id, name}, index) => (
        <ProductListItem
          key={id}
          id={id}
          name={name}
          type={ItemTypes.product}
          folderId={activeFolder !== null ? activeFolder : undefined}
          index={index}
        />
      ))}
    </div>
  )
}

export default RightSide
