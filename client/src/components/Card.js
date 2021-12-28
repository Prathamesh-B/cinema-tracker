import React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";


export const Card = () => {
    let history = useHistory();
    useEffect(() => {
        if (localStorage.getItem('token')) {

        }
        else {
            history.push("/login")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 m-6">
            <div className="card">
                <div className="flex items-center justify-center h-32 card-image">
                    <div className="spinner" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </div>
                <img className="rounded-t card-image" alt='Poster' src="/e1mjopzAS2KNsvpbpahQ1a6SkSn.jpg" />
                <div>
                    <div className="card-header">Movie Title<button className="btn btn-icon btn-sm btn-light"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg></button></div>
                </div>
                <div className="card-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                    <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                        <svg className="h-4 fill-yellow-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path stroke="black" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                        </svg>
                        <span className="px-1 font-bold text-gray-700 dark:text-gray-200">8.7</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
