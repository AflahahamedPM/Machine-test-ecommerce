import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { SERVER_LINK } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const response = await fetch(`${SERVER_LINK}/allCategories`);
    const data = await response.json();
    setCategories(data.data);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {categories.length == 0 ? (
            <p>loadingg...</p>
          ) : (
            <div className="hidden lg:flex space-x-4 uppercase text-gray-800 font-semibold tracking-wide">
              <Link to="/allProducts" className="hover:text-gray-600">
                ALL PRODUCTS
              </Link>
              {categories.map((category) => (
                <Link
                  key={category._id}
                  to={`/category/${category.name}`}
                  className="hover:text-gray-600"
                >
                  {category.name.toUpperCase()}
                </Link>
              ))}
            </div>
          )}

          <div className="text-gray-800 font-bold text-2xl mr-28">
            <Link to="/">HEAVENLY</Link>
          </div>
          <div className="hidden lg:flex space-x-4 uppercase text-gray-800 font-semibold tracking-wide">
            <Link to="/cart" className="hover:text-gray-600">
              CART
            </Link>
            <Link to="/login" className="hover:text-gray-600">
              LOGIN
            </Link>
          </div>
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-600"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <Bars3Icon className="block h-6 w-6" />
              ) : (
                <XMarkIcon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden ${isOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/allProducts"
            className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium uppercase tracking-wide"
          >
            ALL PRODUCTS
          </Link>
          {categories.map((category) => (
            <Link
              key={category._id}
              to={`/category/${category.name}`}
              className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium uppercase tracking-wide"
            >
              {category.name.toUpperCase()}
            </Link>
          ))}
          <Link
            to="/cart"
            className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium uppercase tracking-wide"
          >
            CART
          </Link>
          <Link
            to="/login"
            className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium uppercase tracking-wide"
          >
            LOGIN
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
