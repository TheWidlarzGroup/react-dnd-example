/** @format */

import {useDrop} from 'react-dnd'
import {DragItem, Dropzones, ItemTypes} from './types'
import useApi from '../Api/useApi'

const useDropMethod = (location: string, targetId?: string) => {
  const {folder, product} = ItemTypes
  const {
    deleteProductFromFolder,
    deleteFolder,
    deleteProductFromUpperList,
    putProductsInFolder,
    postProductInFolder,
  } = useApi()
  const [{isOver, draggedItemType}, drop] = useDrop({
    accept: [folder, product],
    drop: (item: DragItem, monitor) => {
      if (monitor.didDrop()) return

      const {id, type, folderId, name} = item

      switch (type) {
        case folder:
          if (location !== Dropzones.main) return
          deleteFolder({id})
          break
        case product:
          if (location === Dropzones.main) {
            if (folderId !== undefined) {
              deleteProductFromFolder({folderId, id})
            } else {
              deleteProductFromUpperList({id})
            }
            break
          }
          if (targetId === undefined || folderId === targetId) return
          if (folderId !== undefined) {
            putProductsInFolder({
              id,
              folderId,
              targetFolderId: targetId,
            })
          } else {
            postProductInFolder({targetId, name})
          }
          break
      }

      return {location}
    },
    collect: monitor => ({
      isOver: monitor.isOver({shallow: true}),
      draggedItemType: monitor.getItemType(),
    }),
  })

  return {drop, isOver, draggedItemType}
}

export default useDropMethod
