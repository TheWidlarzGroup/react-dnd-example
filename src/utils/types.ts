/** @format */

export interface ProductsType {
  id: string
  name: string
  order: number
}

export interface FoldersList {
  id: string
  name: string
  order: number
}

export interface ProductsInFolderType {
  id: string
  name: string
  folderId: string
  order: number
}
