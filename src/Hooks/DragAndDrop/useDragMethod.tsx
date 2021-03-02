/** @format */

import {useDrag} from 'react-dnd'
import {Dropzones, ItemTypes} from './types'
import {FoldersList, ProductsInFolderType} from '../../utils/types'
import useQueryCache from '../Api/useQueryCache'
import useApi from '../Api/useApi'

const useDragMethod = (
  id: string,
  name: string,
  type: ItemTypes,
  index: number,
  folderId?: string,
) => {
  const {
    queryClient,
    queryKeys: {folders, productsInFolder},
  } = useQueryCache()
  const {updateFoldersOrder, updateProductsInFoldersOrder} = useApi()
  const [, drag] = useDrag({
    item: {
      type,
      id,
      name,
      index,
      folderId,
    },
    end: (_item, monitor) => {
      const dropResult: {location: string} = monitor.getDropResult()
      if (dropResult.location === Dropzones.main) return //check if item was removed

      const {folder, product} = ItemTypes

      switch (type) {
        case folder:
          const folderList = queryClient.getQueryData(folders) as FoldersList
          updateFoldersOrder({arr: folderList})
          break
        case product:
          if (folderId === undefined) return
          const queryKey = productsInFolder(folderId)
          const arr = queryClient.getQueryData(
            queryKey,
          ) as ProductsInFolderType[]
          updateProductsInFoldersOrder({folderId, arr})
          break
      }
    },
  })

  return {drag}
}

export default useDragMethod
