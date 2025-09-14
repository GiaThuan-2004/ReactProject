import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "./style/global.css"
import LoginPage from './pages/loginpage.jsx'
import RegisterPage from './pages/registerpage.jsx'
import UserPage from './pages/userpage.jsx'
import ProductPage from './pages/productpage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/users",
        element: <UserPage />
      },
      {
        path: "/products",
        element: <ProductPage />
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
