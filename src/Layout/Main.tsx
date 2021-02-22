/** @format */

import ListContainer from './ListContainer'
import {useRef} from 'react'
import useDropMethod from '../Hooks/DragAndDrop/useDropMethod'
import {Dropzones} from '../Hooks/DragAndDrop/types'

const Main = () => {
  const itemRef = useRef<HTMLDivElement>(null)
  const {drop} = useDropMethod(Dropzones.main)

  drop(itemRef)
  return (
    <div
      className={`h-full w-full flex justify-center items-center`}
      ref={itemRef}>
      <ListContainer />
    </div>
  )
}

export default Main
