/** @format */

import useDeleteFolder from './useDeleteFolder'
import useDeleteProductFromFolder from './useDeleteProductFromFolder'
import useDeleteProductFromUpperList from './useDeleteProductFromUpperList'
import useGetFolders from './useGetFolders'
import useGetProducts from './useGetProducts'
import useGetProductsInFolder from './useGetProductsInFolder'
import usePostProductInFolder from './usePostProductInFolder'
import usePutProductsInFolder from './usePutProductsInFolder'
import useUpdateOrder from './useUpdateFoldersOrder'
import useUpdateProductsInFoldersOrder from './useUpdateProductsInFoldersOrder'

const useApi = (id?: string | null) => {
  const {mutate: putProductsInFolder} = usePutProductsInFolder()
  const {mutate: deleteProductFromFolder} = useDeleteProductFromFolder()
  const {mutate: deleteFolder} = useDeleteFolder()
  const {mutate: deleteProductFromUpperList} = useDeleteProductFromUpperList()
  const {mutate: postProductInFolder} = usePostProductInFolder()
  const {mutate: updateFoldersOrder} = useUpdateOrder()
  const {
    mutate: updateProductsInFoldersOrder,
  } = useUpdateProductsInFoldersOrder()

  return {
    products: useGetProducts(),
    folders: useGetFolders(),
    getProductsInFolder: useGetProductsInFolder(id),
    putProductsInFolder,
    deleteProductFromFolder,
    deleteFolder,
    deleteProductFromUpperList,
    postProductInFolder,
    updateFoldersOrder,
    updateProductsInFoldersOrder,
  }
}

export default useApi
