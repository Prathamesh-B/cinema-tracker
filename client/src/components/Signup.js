import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";

export const Signup = () => {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "" })
    let history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${process.env.REACT_APP_API_HOST}/api/auth/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            history.push("/");
        }
        else {
            alert("Invalid credentials");
        }
    }
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    return (
        <section className="px-4 py-24 mx-auto max-w-7xl">
            <div className="w-full mx-auto space-y-5 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12">
                <h1 className="mb-1 text-xl font-medium text-center text-gray-800 md:text-3xl">Create Account</h1>
                <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                    <label className="block">
                        <span className="block mb-1 text-xs font-medium text-gray-700">Name</span>
                        <input name="name" className="form-input" type="text" placeholder="Your name" onChange={onChange} required />
                    </label>
                    <label className="block">
                        <span className="block mb-1 text-xs font-medium text-gray-700">Your Email</span>
                        <input name="email" className="form-input" type="email" placeholder="Ex. james@bond.com" inputMode="email" onChange={onChange} required />
                    </label>
                    <label className="block">
                        <span className="block mb-1 text-xs font-medium text-gray-700">Create a password</span>
                        <input name="password" className="form-input" type="password" placeholder="••••••••" onChange={onChange} required />
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
