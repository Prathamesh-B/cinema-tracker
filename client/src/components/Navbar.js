import React from 'react'
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="bg-white shadow dark:bg-gray-800">
            <div className="container px-6 py-4 mx-auto">
                <div className="md:flex md:items-center md:justify-between">
                    <div className="flex items-center justify-between">
                        <div className="text-xl font-semibold text-gray-700">
                            <Link to="/" className="text-2xl font-bold text-gray-800 transition-colors duration-200 transform dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" >Cinema Tracker</Link>
                        </div>
                        {/* Mobile menu button */}
                        <div className="flex md:hidden">
                            <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                    <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                    <div className="flex-1 md:flex md:items-center md:justify-between">
                        <div className="flex flex-col -mx-4 md:flex-row md:items-center md:mx-8">
                            <Link to="/" className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">Popular</Link>
                            <Link to="/" className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">Upcoming</Link>
                        </div>
                        <div className="flex items-center mt-4 md:mt-0">
                            <div className="p-1.5 w-full sm:w-auto overflow-hidden bg-white rounded-lg dark:bg-gray-800 ">
                                <div className="space-y-2 sm:space-y-0 sm:flex sm:-mx-1">
                                    <Link to="/login" className="mx-1 px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-900 focus:outline-none focus:ring focus:ring-purple-900 focus:ring-opacity-80">
                                        Login
                                    </Link>
                                    <Link to="/signup" className="mx-1 px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-900 focus:outline-none focus:ring focus:ring-purple-900 focus:ring-opacity-80">
                                        Signup
                                    </Link>
                                </div>
                            </div>
                            <button type="button" className="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                                <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                                    <img src="https://avatars.dicebear.com/api/jdenticon/random.svg" className="object-cover w-full h-full" alt="avatar" />
                                </div>
                                <h3 className="mx-2 text-sm font-medium text-gray-700 dark:text-gray-200 md:hidden">User</h3>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
