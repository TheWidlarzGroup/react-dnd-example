/** @format */
import {FoldersList, ProductsInFolderType, ProductsType} from '../utils/types'

export const productsMock: ProductsType[] = [
  {
    id: '1',
    name: 'product 1',
    order: 1,
  },
  {
    id: '2',
    name: 'product 2',
    order: 2,
  },
  {
    id: '3',
    name: 'product 3',
    order: 3,
  },
  {
    id: '4',
    name: 'product 4',
    order: 4,
  },
  {
    id: '5',
    name: 'product 5',
    order: 5,
  },
  {
    id: '6',
    name: 'product 6',
    order: 6,
  },
]

export const folders: FoldersList[] = [
  {
    id: '1',
    name: 'shop 1',
    order: 1,
  },
  {
    id: '2',
    name: 'shop 2',
    order: 2,
  },
  {
    id: '3',
    name: 'shop 3',
    order: 3,
  },
]

export const productsInFolder: ProductsInFolderType[] = [
  {
    id: '1',
    name: '1 products in folder 1',
    folderId: '1',
    order: 1,
  },
  {
    id: '2',
    name: '2 products in folder 1',
    folderId: '1',
    order: 2,
  },
  {
    id: '3',
    name: '3 products in folder 1',
    folderId: '1',
    order: 3,
  },
  {
    id: '4',
    name: '4 products in folder 1',
    folderId: '1',
    order: 4,
  },
  {
    id: '5',
    name: '5 products in folder 1',
    folderId: '1',
    order: 5,
  },
  {
    id: '6',
    name: 'products in folder 2',
    folderId: '2',
    order: 1,
  },
]
