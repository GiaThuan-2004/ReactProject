import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "./style/global.css"
import LoginPage from './pages/loginpage.jsx'
import RegisterPage from './pages/registerpage.jsx'
import UserPage from './pages/userpage.jsx'
import BookPage from './pages/bookpage.jsx'
import ToDoApp from './component/todo/todoApp.jsx'
import ErrorPage from './pages/error.jsx'
import { AuthContextWrapper } from './component/context/auth.context.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <ToDoApp />
      },
      {
        path: "/users",
        element: <UserPage />
      },
      {
        path: "/books",
        element: <BookPage />
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
  <AuthContextWrapper>
    <RouterProvider router={router} />
  </AuthContextWrapper>

)
