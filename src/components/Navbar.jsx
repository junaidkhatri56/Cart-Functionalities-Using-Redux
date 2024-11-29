import React from "react";
import { Link } from "react-router-dom";
import { useSelector} from 'react-redux'

const Navbar = () => {

  const cartItems = useSelector((state) => state.cart.cart)

  return (
    <div className="navbar bg-white shadow-md px-6 sticky top-0 z-50">
      {/* Logo Section */}
      <div className="flex-1">
        <Link
          to="/products"
          className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition-all"
        >
          Shopping Cart
        </Link>
      </div>
      {/* Navigation Links and Cart Section */}
      <div className="flex-none flex items-center space-x-6">
        {/* Navigation Links */}
        <ul className="flex space-x-4 text-gray-700 font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-blue-600 transition-all duration-200"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="hover:text-blue-600 transition-all duration-200"
            >
              PRODUCTS
            </Link>
          </li>
        </ul>

        {/* Cart Section */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle hover:bg-blue-100 transition-all"
          >
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm bg-blue-600 text-white indicator-item">
                {cartItems.length}
              </span>
            </div>
          </div>
          {/* Dropdown Content */}
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-white border border-gray-200 z-[1] mt-3 w-60 shadow-lg rounded-lg"
          >
            <div className="card-body">
              <span className="text-lg font-bold text-gray-800">{cartItems.length} Items In Your Cart</span>
             
              <div className="card-actions mt-3">
                <Link to={'/checkout'}>
                <button className="btn bg-blue-600 text-white w-full hover:bg-blue-700 transition-all">
                  View Cart
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
