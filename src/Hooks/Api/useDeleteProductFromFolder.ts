/** @format */

import axios from 'axios'
import {useMutation} from 'react-query'
import useQueryCache from './useQueryCache'

const deleteProductFromFolder = async (variables: {
  folderId: string
  id: string
}) => {
  const {folderId, id} = variables
  return await axios.delete(`/api/folder/${folderId}/product/${id}`)
}

const useDeleteProductFromFolder = () => {
  const {
    queryClient,
    queryKeys: {productsInFolder},
  } = useQueryCache()
  return useMutation(deleteProductFromFolder, {
    onSuccess: (data, {folderId}) =>
      queryClient.refetchQueries(productsInFolder(folderId)),
  })
}

export default useDeleteProductFromFolder
