import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
      <div className="text-center p-8 bg-white shadow-2xl rounded-xl">
        <h1 className="text-4xl font-bold mb-6 text-gray-800">Welcome to Task Master</h1>
        <p className="text-xl mb-8 text-gray-600">Organize your life, one task at a time</p>
        
        <div className="flex justify-center space-x-4">
          <Link 
            to="/login" 
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Log In
          </Link>
          <Link 
            to="/signup" 
            className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-300"
          >
            Sign Up
          </Link>
          <Link 
            to="/todos" 
            className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
          >
            To Do List
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;