import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../features/cart/cartSlice'

const Products = () => {
  const dispatch = useDispatch()  

  const [products, setProducts] = useState([]); // All products from API
  const [filteredProducts, setFilteredProducts] = useState([]); // Products to display
  const [searchTerm, setSearchTerm] = useState(""); // Search term
  const [category, setCategory] = useState(""); // Selected category

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
    setFilteredProducts(data); // Initially display all products
  };

  // Handle Search Input
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    // Filter based on search term and category
    const filtered = products.filter((product) => {
      const matchesSearch = product.title.toLowerCase().includes(term);
      const matchesCategory =
        category === "" || product.category === category;
      return matchesSearch && matchesCategory;
    });
    setFilteredProducts(filtered);
  };

  // Handle Category Filter
  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(selectedCategory);

    // Filter based on category and search term
    const filtered = products.filter((product) => {
      const matchesSearch = product.title.toLowerCase().includes(searchTerm);
      const matchesCategory =
        selectedCategory === "" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
    setFilteredProducts(filtered);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <header className="bg-blue-600 text-white py-6 text-center">
        <h1 className="text-3xl font-bold">Our Products</h1>
        <p className="text-lg mt-2">Find the best items tailored just for you!</p>
      </header>

      {/* Search and Filter Section */}
      <section className="container mx-auto px-6 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Bar */}
          <div className="relative w-full md:w-1/2">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search products..."
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          {/* Filter Dropdown */}
          <div>
            <select
              value={category}
              onChange={handleCategoryChange}
              className="w-full md:w-auto px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="">All Categories</option>
              <option value="electronics">Electronics</option>
              <option value="jewelery">Jewelery</option>
              <option value="men's clothing">Men's Clothing</option>
              <option value="women's clothing">Women's Clothing</option>
            </select>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 shadow-md rounded-lg overflow-hidden bg-white hover:shadow-lg transition-all"
              >
                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  {/* Product Title */}
                  <h2 className="text-lg font-semibold text-gray-800 truncate">
                    {item.title}
                  </h2>
                  {/* Product Description */}
                  <p className="text-gray-600 text-sm mt-2">
                    {item.description.length > 60
                      ? item.description.substring(0, 60) + "..."
                      : item.description}
                  </p>
                  {/* Price and Add to Cart */}
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-bold text-blue-600">
                      ${item.price}
                    </span>
                    <button
                      onClick={() => dispatch(addToCart(item))}
                      className="px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-md hover:bg-blue-700 transition"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">
              No products match your search or filter criteria.
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Products;
