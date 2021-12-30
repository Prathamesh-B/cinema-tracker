import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";
export const Navbar = () => {
    let history = useHistory()
    const handleLogout = () => {
        localStorage.removeItem('token')   
        history.push('/login')    
    }
    const [showNavList, setShowNavList] = useState(false)
    const toggleNavList = () => setShowNavList(!showNavList)
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
                            <button onClick={toggleNavList} type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                                    <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    {/* Mobile Menu open: "block", Menu closed: "hidden" */}

                    <div style={{ display: showNavList ? 'none' : null }} className="flex-1 md:flex md:items-center md:justify-between">
                        <div className=" flex flex-col -mx-4 md:flex-row md:items-center md:mx-8">
                            <Link to="/" className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">Popular</Link>
                            <Link to="/" className="px-2 py-1 mx-2 mt-2 text-sm font-medium text-gray-700 transition-colors duration-200 transform rounded-md md:mt-0 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700">Upcoming</Link>
                        </div>
                        <div className="flex items-center mt-4 md:mt-0">
                            {!localStorage.getItem('token')?
                            <div className="p-1.5 w-full sm:w-auto overflow-hidden bg-white rounded-lg dark:bg-gray-800 ">
                                <div className="space-y-2 sm:space-y-0 sm:flex sm:-mx-1">
                                    <Link to="/login" className=" px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-purple-800 rounded-md hover:bg-purple-900 focus:outline-none focus:ring focus:ring-purple-900 focus:ring-opacity-80">
                                        Login</Link>
                                    <Link to="/signup" className="mx-2 px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-purple-800 rounded-md hover:bg-purple-900 focus:outline-none focus:ring focus:ring-purple-900 focus:ring-opacity-80">
                                        Signup</Link>
                                </div>
                            </div>:
                            <div x-data="dropdown()">
                                <button className="p-0 rounded-full btn btn-white" x-spread="trigger">
                                    <div className="avatar avatar-sm">
                                        <img src="https://avatars.dicebear.com/api/jdenticon/random.svg" alt="p" />
                                    </div>
                                </button>
                                <div className="dropdown-list" id="profile-menu" x-position="left-start" x-spread="dropdown" x-cloak>
                                    <p className="dropdown-header">User Name</p>
                                    <Link to="#" className="dropdown-item">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-2">
                                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                        </svg>
                                        Profile
                                    </Link>
                                    <Link to="#" onClick={handleLogout} className="dropdown-item">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-2">
                                            <path
                                                fillRule="evenodd"
                                                d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        Log out
                                    </Link>
                                </div>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
