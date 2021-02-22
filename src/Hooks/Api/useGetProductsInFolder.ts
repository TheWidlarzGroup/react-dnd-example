/** @format */

import axios from 'axios'
import {QueryFunctionContext, useQuery} from 'react-query'
import useQueryCache from './useQueryCache'
import {ProductsInFolderType} from '../../utils/types'

const getProductsInFolder = async ({queryKey}: QueryFunctionContext) => {
  const {data} = await axios.get(`/api/folder/${queryKey[0]}/products`)
  return data
}

const useGetProductsInFolder = (id?: string | null) => {
  const {
    queryKeys: {productsInFolder},
  } = useQueryCache()

  return useQuery<ProductsInFolderType[]>({
    enabled: id !== undefined && id !== null,
    queryKey: productsInFolder(id),
    queryFn: getProductsInFolder,
  })
}

export default useGetProductsInFolder
