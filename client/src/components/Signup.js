import React from 'react'
import { Link } from "react-router-dom";

export const Signup = () => {
    return (
        <section className="px-4 py-24 mx-auto max-w-7xl">
            <div className="w-full mx-auto space-y-5 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12">
                <h1 className="mb-1 text-xl font-medium text-center text-gray-800 md:text-3xl">Create Account</h1>
                <form className="mt-8 space-y-4">
                    <label className="block">
                        <span className="block mb-1 text-xs font-medium text-gray-700">Name</span>
                        <input className="form-input" type="text" placeholder="Your name" required />
                    </label>
                    <label className="block">
                        <span className="block mb-1 text-xs font-medium text-gray-700">Your Email</span>
                        <input className="form-input" type="email" placeholder="Ex. james@bond.com" inputMode="email" required />
                    </label>
                    <label className="block">
                        <span className="block mb-1 text-xs font-medium text-gray-700">Create a password</span>
                        <input className="form-input" type="password" placeholder="••••••••" required />
                    </label>
                    <input type="submit" className="w-full btn btn-primary btn-lg" value="Sign Up" />
                </form>
            </div>
            <p className="mt-4 mb-2 text-sm font-normal text-center text-gray-700 md:text-base">
                Already have an account?
                <Link to="/login" className="text-purple-700 hover:text-purple-900"> Login</Link>
            </p>
        </section>
    )
}
