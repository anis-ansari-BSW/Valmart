import React, { useContext } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { FaCaretDown, FaSearch, FaRegHeart, FaRegUser, FaShoppingCart, FaBorderAll } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from '../context/CartContext';

function TopNavbar() {
  const { cart } = useContext(CartContext);
  return (
    <>
      <nav className="sticky top-0 z-10">
        <div className="bg-blue-600">
          <div className="mx-auto px-2 py-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* <!-- Mobile menu button--> */}
                <button
                  type="button"
                  className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="absolute -inset-0.5"></span>
                  <span className="sr-only">Open main menu</span>
                  {/* <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          --> */}
                  <svg
                    className="block size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      strokeLinecap="round"
                      // strokeLinecap="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                  {/* <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          --> */}
                  <svg
                    className="hidden size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      strokeLinecap="round"
                      // strokeLinecap="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex items-center justify-center sm:items-stretch sm:justify-start">

                <div className="flex shrink-0 items-center p-3 rounded-full hover:bg-blue-950">
                  <Link to="/" key="logo">
                    <img
                      className="h-8 w-auto"
                      src="src/assets/image/walmart-icon.png"
                      alt="Your Company"
                    />
                  </Link>
                </div>

                <div className="hidden sm:ml-6 sm:block">
                  <Menu as="div" className="relative inline-block text-left">
                    <div className="w-96">
                      <MenuButton className="bg-blue-800 flex px-3 py-1 rounded-full items-center hover:bg-blue-950">
                        <div>
                          <img src="src/assets/image/mobile-icon.svg" alt="mobile-image" className="h-8 w-auto" />
                        </div>
                        <div className="d-flex px-4">
                          <p className="text-white">How do you want your items?</p>
                          <p className="text-white text-sm">Sacramento, 95829, Sacramento..</p>
                        </div>
                        <div>
                          <p className="text-white"> <FaCaretDown />
                          </p>
                        </div>
                      </MenuButton>
                    </div>

                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      <div className="py-1">
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                          >
                            Account settings
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                          >
                            Support
                          </a>
                        </MenuItem>
                        <MenuItem>
                          <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                          >
                            License
                          </a>
                        </MenuItem>
                        <form action="#" method="POST">
                          <MenuItem>
                            <button
                              type="submit"
                              className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                            >
                              Sign out
                            </button>
                          </MenuItem>
                        </form>
                      </div>
                    </MenuItems>
                  </Menu>
                </div>
              </div>

              <div className="w-full">
                <form action="">
                  <div className="relative">
                    <input type="text" name="" id="" placeholder="Search everything at Walmart online and in store" className="bg-white flex px-3 py-3 rounded-full items-center w-full" />
                    <span className="bg-blue-800 p-2 rounded-full absolute top-2 right-2 cursor-pointer">
                      <FaSearch className=" text-white" />
                    </span>
                  </div>
                </form>
              </div>

              {/* right side section */}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="text-white flex justify-center items-center hover:bg-blue-950 rounded-full p-2 cursor-pointer">
                  <FaRegHeart />
                  <div className="px-2">
                    <p className="text-sm mb-0 p-0">Reader</p>
                    <p className="font-bold mt-0 p-0 text-wrap">Myitems</p>
                  </div>
                </div>

                <div className="text-white flex justify-center items-center mx-3  hover:bg-blue-950 rounded-full p-2 cursor-pointer">
                  <FaRegUser />
                  <div className="px-2">
                    <p className="text-sm mb-0 p-0">Sign In</p>
                    <p className="font-bold mt-0 p-0">Account</p>
                  </div>
                </div>

                <div className="text-white flex justify-center items-center  hover:bg-blue-950 rounded-full p-2 cursor-pointer">

                  <div className="px-2">
                    <Link to="/cart" className="text-white text-lg font-bold">
                      <p className="flex justify-center pb-1">
                        <FaShoppingCart />
                      </p>
                      <p className="text-sm mb-0 p-0">{cart.reduce((total, item) => total + item.final_price * 1, 0).toFixed(2)}</p>

                      <span className="bg-yellow-400 px-1 rounded-full text-black border border-black text-sm absolute top-0 right-2">{cart.length}</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* bottom navbar */}
        <div className="bg-blue-200">
          <div className="mx-auto px-2 py-2 sm:px-6 lg:px-8">
            <ul className="flex justify-around">
              <li className="font-bold hover:underline cursor-pointer flex items-center"><FaBorderAll className="pr-1" />    <span> Departments </span></li>
              <li className="font-bold hover:underline cursor-pointer flex items-center"><FaBorderAll className="pr-1" />  Services</li>
              <li className="hover:underline cursor-pointer">Savings</li>
              <li className="hover:underline cursor-pointer">Grocery & Essentails</li>
              <li className="hover:underline cursor-pointer">New Year Goals</li>
              <li className="hover:underline cursor-pointer">Valentine's Day</li>
              <li className="hover:underline cursor-pointer">New & Trending</li>
              <li className="hover:underline cursor-pointer">Fashion</li>
              <li className="hover:underline cursor-pointer">Home</li>
              <li className="hover:underline cursor-pointer">Electronics</li>
              <li className="hover:underline cursor-pointer">Gift Ideas</li>
              {/* <li>Registry</li>
              <li>ONE Cash</li>
              <li>Walmart</li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default TopNavbar;
