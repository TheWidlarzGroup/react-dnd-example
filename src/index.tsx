/** @format */

import React from 'react'
import ReactDOM from 'react-dom'
import './tailwind.output.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import MainProvider from './Providers/MainProvider'
import {QueryCache, QueryClient, QueryClientProvider} from 'react-query'
import {createMirageServer} from './server/server'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'

const queryCache = new QueryCache()
const queryClient = new QueryClient({queryCache})

createMirageServer()

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MainProvider>
        <DndProvider backend={HTML5Backend}>
          <App />
        </DndProvider>
      </MainProvider>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
