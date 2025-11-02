import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import CreateTrip from './create-trip/index.jsx'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Header from './components/custom/Header.jsx'
import { Toaster } from 'sonner'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/create-trip',
    element:<CreateTrip/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Toaster />
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
