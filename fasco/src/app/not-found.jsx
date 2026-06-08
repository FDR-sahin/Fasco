import React from 'react'
import Link from 'next/link'

function NotFound() {
  return (
   <div className="flex flex-col items-center justify-center min-h-[80vh] w-full px-4 text-center">
      {/* Big Animated 404 Text */}
      <div className="relative mb-4">
        <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-pink-500 to-purple-600 animate-pulse select-none">
          404
        </h1>
        {/* Absolute Glowing effect */}
        <div className="absolute top-0 left-0 w-full h-full bg-blue-400 blur-3xl opacity-10 -z-10"></div>
      </div>

      {/* Error Message */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-3">
        Oops! Page Not Found
      </h2>
      
      <p className="text-gray-500 dark:text-gray-400 max-w-md mb-8 text-sm md:text-base leading-relaxed">
        Apni jethay khujchen sethay kichu nei! Bodhhoy URL type korat-e bhul hoyeche athoba page-ti ekhon ar astitte nei.
      </p>

      {/* Action Button */}
      <Link 
        href="/" 
        className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 active:scale-95 rounded-xl shadow-lg shadow-blue-500/20 transition-all duration-200 group"
      >
        {/* Left Arrow Icon */}
        <svg 
          className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Home Page
      </Link>
    </div>
  )
}

export default NotFound