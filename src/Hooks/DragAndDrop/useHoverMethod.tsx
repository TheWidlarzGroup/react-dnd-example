/** @format */

import {RefObject} from 'react'
import {DropTargetMonitor, useDrop} from 'react-dnd'
import useQueryCache from '../Api/useQueryCache'
import useMain from '../useMain'
import {DragItem, Dropzones, ItemTypes} from './types'
import {canMove} from './utils'

const useHoverMethod = (
  ref: RefObject<HTMLDivElement>,
  hoverIndex: number,
  location: string,
) => {
  const {folder, product} = ItemTypes
  const {left} = Dropzones
  const {
    queryClient,
    queryKeys: {folders, productsInFolder},
  } = useQueryCache()
  const {activeFolder} = useMain()
  const [, drop] = useDrop({
    accept: [folder, product],
    hover: (item: DragItem, monitor: DropTargetMonitor) => {
      if (canMove(ref, item, location, hoverIndex, monitor)) {
        const activeQueryKey =
          location === left
            ? folders
            : productsInFolder(activeFolder ?? undefined)
        const data = queryClient.getQueryData(activeQueryKey) as []
        const dragged = data[item.index]
        data.splice(item.index, 1)
        data.splice(hoverIndex, 0, dragged)
        item.index = hoverIndex

        queryClient.setQueryData(activeQueryKey, data)
        return {location}
      }
    },
  })
  return {drop}
}

export default useHoverMethod
