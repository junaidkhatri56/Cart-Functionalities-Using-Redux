import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white">
        <div className="container mx-auto px-6 py-20 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to Our Store
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Discover the best deals and latest trends. Shop now and elevate your style!
          </p>
          <Link to={"/products"}>
          <button className="px-6 py-3 bg-white text-blue-600 font-bold rounded-md hover:bg-gray-100 transition">
            Shop Now
          </button>
          </Link>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-12 px-6 md:px-20 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
            Why Choose Us?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            At our store, we offer high-quality products, unbeatable prices, and
            exceptional customer service. Explore our extensive range of items and
            find exactly what you’re looking for.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 shadow-lg rounded-lg bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Wide Selection</h3>
              <p className="text-gray-600">
                From the latest trends to timeless classics, we have it all.
              </p>
            </div>
            <div className="p-6 shadow-lg rounded-lg bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Affordable Prices</h3>
              <p className="text-gray-600">
                Enjoy amazing deals and discounts on your favorite items.
              </p>
            </div>
            <div className="p-6 shadow-lg rounded-lg bg-gray-50">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Get your orders delivered quickly and hassle-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Start Shopping?
        </h2>
        <p className="text-lg md:text-xl mb-6">
          Don’t wait! Find the perfect items for you today.
        </p>
        <Link to={"/products"}>
        <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-md hover:bg-gray-100 transition">
          Browse Products
        </button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
