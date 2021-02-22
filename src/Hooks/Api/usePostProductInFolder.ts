/** @format */

import axios from 'axios'
import {useMutation} from 'react-query'
import useQueryCache from './useQueryCache'

const postProductInFolder = async (variables: {
  targetId: string
  name: string
}) => {
  const {name, targetId} = variables
  return await axios.post(`/api/folder/${targetId}`, {
    name,
    folderId: targetId,
  })
}

const usePostProductInFolder = () => {
  const {
    queryKeys: {productsInFolder},
    queryClient,
  } = useQueryCache()
  return useMutation(postProductInFolder, {
    onSuccess: (data, {targetId}) =>
      queryClient.refetchQueries(productsInFolder(targetId)),
  })
}

export default usePostProductInFolder
