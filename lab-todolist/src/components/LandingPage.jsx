import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
      <div className="text-center p-12 bg-white shadow-2xl rounded-xl w-full max-w-xl">
        <h1 className="text-5xl font-bold mb-8 text-gray-800">Welcome!</h1>
        <p className="text-2xl mb-12 text-gray-600">A simple to-do list app</p>
        
        <div className="flex flex-col space-y-6">
          <Link 
            to="/profile" 
            className="w-full px-8 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 text-xl"
          >
            Profile Page
          </Link>
          <Link 
            to="/todos" 
            className="w-full px-8 py-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 text-xl"
          >
            To Do List
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;