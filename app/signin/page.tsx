"use client";

import { useState } from "react";

export default function SignInPage() {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-200 flex items-center justify-center px-6 py-12">
      <div className="max-w-md w-full space-y-8">
        
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 drop-shadow-sm mb-2">
            Personalized AI Newsletter
          </h1>
          <p className="text-lg text-gray-700">
            {isSignUp ? "Create your account" : "Sign in to your account"}
          </p>
        </div>

        
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-gray-100">
          <form className="space-y-6">
            
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="Enter your email"
                className="mt-2 block w-full px-4 py-2.5 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />
            </div>

            
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="Enter your password"
                className="mt-2 block w-full px-4 py-2.5 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 text-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
              />
            </div>

            
            <div>
              <button
                type="submit"
                className="w-full py-3 px-6 rounded-xl text-white font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-indigo-300"
              >
                {isSignUp ? "Sign Up" : "Sign In"}
              </button>
            </div>
          </form>

          
          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-indigo-600 hover:text-indigo-500 text-sm font-medium transition"
            >
              {isSignUp
                ? "Already have an account? Sign In"
                : "Don’t have an account? Sign Up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
