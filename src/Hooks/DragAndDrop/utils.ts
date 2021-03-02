/** @format */

import {DropTargetMonitor, XYCoord} from 'react-dnd'
import {DragItem, Dropzones, ItemTypes} from './types'
import {RefObject} from 'react'

const {left, right} = Dropzones
const {folder, product} = ItemTypes

const basicCheck = (
  location: string,
  index: number,
  type: ItemTypes,
  hoverIndex: number,
  folderId?: string | undefined,
) => {
  if (index === undefined) return false
  if (type === folder && location === right) return false
  if (type === product && location === left) return false
  if (type === product && folderId === undefined) return false

  return index !== hoverIndex
}

const calculateMiddle = (
  hoverBoundingRect: DOMRect,
  monitor: DropTargetMonitor,
) => {
  const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

  const clientOffset = monitor.getClientOffset()

  const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top

  return {hoverClientY, hoverMiddleY}
}

const checkUpAndDown = (
  index: number,
  hoverIndex: number,
  hoverMiddleY: number,
  hoverClientY: number,
) => {
  // Dragging downwards
  if (index < hoverIndex && hoverClientY < hoverMiddleY) return false

  // Dragging upwards
  return !(index > hoverIndex && hoverClientY > hoverMiddleY)
}

export const canMove = (
  ref: RefObject<HTMLDivElement>,
  item: DragItem,
  location: string,
  hoverIndex: number,
  monitor: DropTargetMonitor,
) => {
  const {index, type, folderId} = item

  if (!ref.current) return false

  const hoverBoundingRect = ref.current.getBoundingClientRect()

  const {hoverMiddleY, hoverClientY} = calculateMiddle(
    hoverBoundingRect,
    monitor,
  )

  return (
    basicCheck(location, index, type, hoverIndex, folderId) &&
    checkUpAndDown(index, hoverIndex, hoverMiddleY, hoverClientY)
  )
}
