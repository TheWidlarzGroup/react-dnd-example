/** @format */

import axios from 'axios'
import {useMutation} from 'react-query'
import useQueryCache from './useQueryCache'

const deleteFolder = async (variables: {id: string}) => {
  return await axios.delete(`/api/folder/${variables.id}`)
}

const useDeleteFolder = () => {
  const {
    queryKeys: {folders},
    queryClient,
  } = useQueryCache()

  return useMutation(deleteFolder, {
    onSuccess: () => queryClient.refetchQueries(folders),
  })
}

export default useDeleteFolder
