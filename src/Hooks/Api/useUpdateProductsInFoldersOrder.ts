/** @format */

import axios from 'axios'
import {useMutation} from 'react-query'
import useQueryCache from './useQueryCache'
import {ProductsInFolderType} from '../../utils/types'

const updateOrder = async (variables: {
  folderId: string
  arr: ProductsInFolderType[]
}) => {
  return await axios.put(
    `/api/folder/${variables.folderId}/products/updateOrder`,
    {
      products: variables.arr,
    },
  )
}

const useUpdateProductsInFoldersOrder = () => {
  const {
    queryClient,
    queryKeys: {productsInFolder},
  } = useQueryCache()
  return useMutation(updateOrder, {
    onSuccess: (data, {folderId}) =>
      queryClient.refetchQueries(productsInFolder(folderId)),
  })
}

export default useUpdateProductsInFoldersOrder
