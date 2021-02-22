/** @format */

import LeftSide from './LeftSide'
import RightSide from './RightSide'

const ListContainer = () => {
  return (
    <div
      className={`h-4/6 w-10/12 flex border-2 border-solid border-gray-300 relative z-50 bg-gray-200`}>
      <LeftSide />
      <RightSide />
    </div>
  )
}

export default ListContainer
