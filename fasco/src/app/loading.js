import React from 'react'

function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full space-y-4">
      {/* Outer Spinner Ring */}
      <div className="relative flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
        {/* Inner Small Ring (Optional - to look premium) */}
        <div className="absolute w-8 h-8 border-4 border-transparent border-t-pink-500 border-b-pink-500 rounded-full animate-spin [animation-duration:1s] reverse"></div>
      </div>
      
      {/* Loading Text */}
      <div className="flex items-center space-x-1">
        <p className="text-lg font-medium text-gray-600 dark:text-gray-300 tracking-wide animate-pulse">
          Loading Products
        </p>
        {/* Animated Dots */}
        <span className="flex space-x-1">
          <span className="w-1.5 h-1.5 bg-gray-600 dark:bg-gray-300 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
          <span className="w-1.5 h-1.5 bg-gray-600 dark:bg-gray-300 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
          <span className="w-1.5 h-1.5 bg-gray-600 dark:bg-gray-300 rounded-full animate-bounce"></span>
        </span>
      </div>
    </div>
  )
}

export default Loading