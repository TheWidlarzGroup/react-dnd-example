/** @format */

import axios from 'axios'
import {useQuery} from 'react-query'
import {routes} from '../../server/server'
import useQueryCache from './useQueryCache'
import {ProductsType} from '../../utils/types'

const getProducts = async () => {
  const {data} = await axios.get(routes.products)
  return data
}

const useGetProducts = () => {
  const {
    queryKeys: {products},
  } = useQueryCache()
  return useQuery<{products: ProductsType[]}>(products, getProducts)
}

export default useGetProducts
