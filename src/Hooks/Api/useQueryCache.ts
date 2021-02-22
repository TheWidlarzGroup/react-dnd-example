/** @format */

import {useQueryClient} from 'react-query'

const useQueryCache = () => {
  const queryClient = useQueryClient()
  const queryKeys = {
    products: 'products',
    folders: 'folders',
    productsInFolder: (id?: string | null) => [id, 'folders'],
  }
  return {queryClient, queryKeys}
}

export default useQueryCache
