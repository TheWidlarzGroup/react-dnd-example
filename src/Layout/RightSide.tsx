/** @format */

import ProductListItem from '../Components/ProductListItem'
import useApi from '../Hooks/Api/useApi'
import useMain from '../Hooks/useMain'
import {ItemTypes} from '../Hooks/DragAndDrop/types'

const RightSide = () => {
  const {activeFolder} = useMain()
  const {
    getProductsInFolder: {data},
  } = useApi(activeFolder)

  return (
    <div className={`w-full`}>
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
