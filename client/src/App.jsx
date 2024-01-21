import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from "./pages/HomePage"
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import Checkout from "./pages/Checkout"
import Login from "./pages/Login"
import Register from "./pages/Register"
import MyOrders from "./pages/MyOrders"

import Navbar from "./components/Navbar"

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/products',
    element: <Products />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/checkout',
    element: <Checkout />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/my-orders',
    element: <MyOrders />,
  }
])

function App() {
  return (
  <>
  <Navbar />
  <RouterProvider router={router}  />
  </>
  )
}

export default App