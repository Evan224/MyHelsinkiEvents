import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './utils/router'
import Layout from './components/Layout'
import {AuthProvider} from './Auth'
import './utils/config'
import {
  RouterProvider
} from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider >
        <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)
