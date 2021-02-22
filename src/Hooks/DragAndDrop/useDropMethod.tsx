/** @format */

import {useDrop} from 'react-dnd'
import {DragItem, Dropzones, ItemTypes} from './types'
import useApi from '../Api/useApi'

const useDropMethod = (location: string) => {
  const {folder, product} = ItemTypes
  const {
    deleteProductFromFolder,
    deleteFolder,
    deleteProductFromUpperList,
  } = useApi()
  const [, drop] = useDrop({
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
          break
      }
    },
  })

  return {drop}
}

export default useDropMethod
