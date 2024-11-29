import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "../features/cart/cartSlice"; // Import actions

export const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.cart); // Access cart items from Redux state
  const dispatch = useDispatch(); // Initialize dispatch

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    ).toFixed(2);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <header className="bg-blue-600 text-white py-6 text-center">
        <h1 className="text-3xl font-bold">Checkout</h1>
        <p className="text-lg mt-2">Review your items before placing the order.</p>
      </header>

      {/* Cart Items Section */}
      <section className="container mx-auto px-6 py-12">
        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Cart Items */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Your Cart Items</h2>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 mb-4"
                >
                  {/* Item Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  {/* Item Details */}
                  <div className="flex-1 ml-4">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-gray-600 text-sm">
                      ${item.price} x {item.quantity}
                    </p>
                  </div>
                  {/* Total Price */}
                  <div className="text-lg font-bold text-blue-600">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                  {/* Remove Button */}
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="ml-4 text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              ))}
              {/* Clear Cart Button */}
              <button
                onClick={() => dispatch(clearCart())}
                className="mt-4 px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-700 transition"
              >
                Clear Cart
              </button>
            </div>

            {/* Order Summary */}
            <div className="bg-white shadow-md rounded-lg p-6 height-[310px] mt-14">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
              <div className="flex justify-between mb-4">
                <span className="text-gray-600">Subtotal</span>
                <span className="text-lg font-semibold">${calculateTotal()}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-gray-600">Shipping</span>
                <span className="text-lg font-semibold">$5.00</span>
              </div>
              <div className="flex justify-between border-t border-gray-300 pt-4">
                <span className="text-gray-800 font-bold">Total</span>
                <span className="text-lg font-bold text-blue-600">
                  ${(parseFloat(calculateTotal()) + 5).toFixed(2)}
                </span>
              </div>
              <button
                className="w-full mt-6 px-4 py-2 bg-blue-600 text-white text-lg font-semibold rounded-md hover:bg-blue-700 transition"
              >
                Place Order
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-600">Your cart is empty!</p>
        )}
      </section>
    </div>
  );
};
