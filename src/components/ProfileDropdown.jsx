import React from 'react'

export const ProfileDropdown = ({reference}) => {
  return (
    <div ref={reference} className="origin-top-right absolute right-1 mt-2  w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-20">
      <div className="py-2">
        <a href="#" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600">
          Login  
        </a>
        <a href="#" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600">
          Create account               
        </a>
        <a href="#" className="block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600">
          Logout
        </a>
      </div>
    </div>
  )
}
