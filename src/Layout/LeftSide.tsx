/** @format */

import {useEffect} from 'react'
import ProductListItem from '../Components/ProductListItem'
import useApi from '../Hooks/Api/useApi'
import useMain from '../Hooks/useMain'
import {ItemTypes} from '../Hooks/DragAndDrop/types'

const LeftSide = () => {
  const {setActiveFolder} = useMain()

  const {
    folders: {data},
  } = useApi()

  useEffect(() => {
    if (data && data.length) {
      setActiveFolder(data[0].id)
    } else {
      setActiveFolder(null)
    }
  }, [data, setActiveFolder])

  return (
    <div
      className={`h-full w-1/5 border-r border-solid border-gray-300 relative `}>
      {data?.map((folder, index) => (
        <ProductListItem
          key={folder.id}
          id={folder.id}
          name={folder.name}
          type={ItemTypes.folder}
          index={index}
        />
      ))}
    </div>
  )
}

export default LeftSide
