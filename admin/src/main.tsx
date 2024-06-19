import React from "react"
import ReactDOM from 'react-dom/client'

import { Provider } from "react-redux"
import { RouterProvider } from "react-router-dom"
import "@utils/global/styles/global.scss"

import { store } from "@store/index"
import { router } from "@router/index"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
