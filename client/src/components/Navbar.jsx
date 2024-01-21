import React from 'react'
// import { Link } from "react-router-dom" // TODO

const Navbar = () => {
  return (
    <div className='flex justify-between bg-yellow-900 py-4 px-6 text-gray-200'>
        <a className='text-white font-bold'>Store</a>
        <ul className='flex gap-4'>
            <a href="/products"><li>Products</li></a>
            <a href="/cart"><li>Cart</li></a>
            <a href="/my-orders"><li>My orders</li></a>
            <a href="/login"><li>Login</li></a>
            <a href="/register"><li>Register</li></a>
        </ul>
    </div>
  )
}

export default Navbar