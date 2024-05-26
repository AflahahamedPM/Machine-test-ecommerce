import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Signup from './components/Signup.jsx'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import ProductList from './components/ProductLists.jsx'
import CategoryProductList from './components/CategoryProductList.jsx'
import SingleProduct from './components/SingleProductCard.jsx'

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/signup",
    element:<Signup/>
  },
  {
    path:"/home",
    element:<Home/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/allProducts",
    element:<ProductList/>
  },
  {
    path:"/category/:name",
    element:<CategoryProductList />
  },
  {
    path:"/product/:_id",
    element:<SingleProduct/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>,
)
