/** @format */

import {createServer} from 'miragejs'
import {folders, productsInFolder, productsMock} from './productMock'
import {FoldersList, ProductsInFolderType} from '../utils/types'

export enum routes {
  products = '/api/products',
  folders = '/api/folders',
  productsInFolder = '/api/folder/:folderId/products',
  singleProductInFolder = '/api/folder/:folderId/product/:productId',
  singleFolder = '/api/folder/:id',
  singleProduct = '/api/product/:id',
  updateFolders = '/api/folders/update',
  updateProductsInFoldersOrder = '/api/folder/:folderId/products/updateOrder',
}

export const createMirageServer = () => {
  const server = createServer({})

  server.db.loadData({
    productsInFolder,
    folders,
    productsMock,
  })

  server.get(routes.products, schema => ({
    products: schema.db.productsMock,
  }))
  server.get(routes.folders, schema => schema.db.folders)
  server.get(routes.productsInFolder, (schema, request) => {
    const id = request.params.folderId

    const products = schema.db.productsInFolder.where({folderId: id})
    return products.sort(
      (a: {order: number}, b: {order: number}) => a.order - b.order,
    )
  })

  server.put(routes.productsInFolder, (schema, request) => {
    const body: {id: string; folderId: string} = JSON.parse(request.requestBody)

    return schema.db.productsInFolder.update(
      {id: body.id},
      {folderId: body.folderId},
    )
  })

  server.put(routes.updateProductsInFoldersOrder, (schema, request) => {
    const body: {products: ProductsInFolderType[]} = JSON.parse(
      request.requestBody,
    )
    body.products.forEach((product, index) => {
      schema.db.productsInFolder.update({id: product.id}, {order: index})
    })
    return schema.db.productsInFolder
  })

  server.delete(routes.singleProductInFolder, (schema, request) => {
    schema.db.productsInFolder.remove({id: request.params.productId})
    return {}
  })

  server.delete(routes.singleFolder, (schema, request) => {
    const paramsId = request.params.id
    schema.db.productsInFolder.remove({folderId: paramsId})
    schema.db.folders.remove({id: paramsId})
    return {}
  })

  server.delete(routes.singleProduct, (schema, request) => {
    schema.db.productsMock.remove({id: request.params.id})
    return {}
  })

  server.post(routes.singleFolder, (schema, request) => {
    const body: {name: string; folderId: string} = JSON.parse(
      request.requestBody,
    )
    return schema.db.productsInFolder.insert({
      id: new Date().toISOString(),
      ...body,
    })
  })

  server.post(routes.updateFolders, (schema, request) => {
    const body: {folders: FoldersList[]} = JSON.parse(request.requestBody)
    schema.db.folders.remove()
    schema.db.folders.insert([...body.folders])

    return schema.db.folders
  })
}
