/** @format */

import {FC} from 'react'

interface Props {
  name: string
}

const ProductUpperListContainer: FC<Props> = ({name}) => {
  return (
    <div className="w-1/4 border border-gray-400 border-solid rounded-full flex justify-center items-center">
      {name}
    </div>
  )
}

export default ProductUpperListContainer
