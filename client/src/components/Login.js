import React from 'react'

export const Login = () => {
    return (
        <section class="px-4 py-24 mx-auto max-w-7xl">
            <div class="w-full mx-auto space-y-5 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12">
                <h1 class="mb-1 text-xl font-medium text-center text-gray-800 md:text-3xl">Log in to your account</h1>
                <form class="space-y-4">
                    <label class="block">
                        <span class="block mb-1 text-xs font-medium text-gray-700">Your Email</span>
                        <input class="form-input" type="email" placeholder="Ex. james@bond.com" inputmode="email" required />
                    </label>
                    <label class="block">
                        <span class="block mb-1 text-xs font-medium text-gray-700">Your Password</span>
                        <input class="form-input" type="password" placeholder="••••••••" required />
                    </label>
                    <input type="submit" class="w-full py-3 btn btn-primary" value="Login" />
                </form>
            </div>
            <p className="mb-4 space-y-2 text-sm text-left text-gray-600 sm:text-center sm:space-y-0 mt-4">
                <a href="/signup" className="w-full btn btn-sm btn-link sm:w-auto">Create an account</a>
            </p>
        </section>
    )
}
