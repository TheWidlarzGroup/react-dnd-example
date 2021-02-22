/** @format */

import axios from 'axios'
import {useMutation} from 'react-query'
import useQueryCache from './useQueryCache'

const deleteProductFromUpperList = async (variables: {id: string}) => {
  return await axios.delete(`/api/product/${variables.id}`)
}

const useDeleteProductFromUpperList = () => {
  const {
    queryKeys: {products},
    queryClient,
  } = useQueryCache()

  return useMutation(deleteProductFromUpperList, {
    onSuccess: () => queryClient.refetchQueries(products),
  })
}

export default useDeleteProductFromUpperList
