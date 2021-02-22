/** @format */

import axios from 'axios'
import {useMutation} from 'react-query'
import useQueryCache from './useQueryCache'
import {FoldersList} from '../../utils/types'

const updateOrder = async (variables: {arr: FoldersList}) => {
  return await axios.post('/api/folders/update', {
    folders: variables.arr,
  })
}

const useUpdateFoldersOrder = () => {
  const {
    queryClient,
    queryKeys: {folders},
  } = useQueryCache()

  return useMutation(updateOrder, {
    onSuccess: () => queryClient.refetchQueries(folders),
  })
}

export default useUpdateFoldersOrder
