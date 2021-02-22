/** @format */

export enum Dropzones {
  left = 'left',
  right = 'right',
  main = 'main',
}

export enum ItemTypes {
  folder = 'folder',
  product = 'product',
}

export interface DragItem {
  type: ItemTypes
  id: string
  name: string
  index: number
  folderId?: string
}
