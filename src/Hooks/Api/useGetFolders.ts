/** @format */

import axios from 'axios'
import {useQuery} from 'react-query'
import {routes} from '../../server/server'
import useQueryCache from './useQueryCache'
import {FoldersList} from '../../utils/types'

const getFolders = async () => {
  const {data} = await axios.get(routes.folders)
  return data
}

const useGetFolders = () => {
  const {
    queryKeys: {folders},
  } = useQueryCache()
  return useQuery<FoldersList[]>(folders, getFolders)
}

export default useGetFolders
