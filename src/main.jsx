import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Root from './components/Root.jsx'
import './index.css'
import Orders from './components/Orders.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import Home from './components/Home.jsx'
import AuthProvider from './providers/AuthProvider.jsx'
import PrivateRoutes from './routes/PrivateRoutes.jsx'
import Profiles from './components/Profiles.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
      },
      {
        path:"/login",
        element:<Login></Login>,
      },
      {
        path:"/register",
        element:<Register></Register>,
      },
      {
        path:"/orders",
        element:<PrivateRoutes><Orders></Orders></PrivateRoutes>
      },
      {
        path:"/profiles",
        element:<Profiles></Profiles>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
