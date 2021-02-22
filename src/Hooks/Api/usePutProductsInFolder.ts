/** @format */

import axios from 'axios'
import {useMutation} from 'react-query'
import useQueryCache from './useQueryCache'

const putProductsInFolder = async (variables: {
  id: string
  folderId?: string
  targetFolderId: string
}) => {
  const {id, folderId, targetFolderId} = variables
  return await axios.put(`/api/folder/${folderId}/products`, {
    id,
    folderId: targetFolderId,
  })
}

const usePutProductsInFolder = () => {
  const {
    queryClient,
    queryKeys: {productsInFolder},
  } = useQueryCache()
  return useMutation(putProductsInFolder, {
    onSuccess: (data, {folderId, targetFolderId}) => {
      queryClient.refetchQueries(productsInFolder(folderId))
      queryClient.refetchQueries(productsInFolder(targetFolderId))
    },
  })
}

export default usePutProductsInFolder
