import React from 'react';
import gamImage from '../assets/gam.jpg';
import BackButton from './BackButton';

function Profile() {

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-2xl">
     <BackButton />
        <div className="flex flex-col items-center">
          <img 
            src={gamImage} 
            alt="Profile" 
            className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg mb-6"
          />

          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800">Gabriel Anderson</h2>
            <p className="text-gray-600 mb-4">Computer science undergraduate at Binus University</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;