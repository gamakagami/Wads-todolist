import React, { useState } from 'react';

function Profile() {
  const [profilePicture, setProfilePicture] = useState('/api/placeholder/200/200');
  const [name, setName] = useState('John Doe');
  const [bio, setBio] = useState('Software developer and tech enthusiast');
  const [isEditing, setIsEditing] = useState(false);

  const handleProfilePictureChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setProfilePicture(event.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSave = () => {
    // Save logic will be implemented later
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-2xl">
        <div className="relative flex flex-col items-center">
          <div className="relative mb-6">
            <img 
              src={profilePicture} 
              alt="Profile" 
              className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <input 
              type="file" 
              id="profilePictureUpload"
              accept="image/*"
              className="hidden"
              onChange={handleProfilePictureChange}
            />
            <label 
              htmlFor="profilePictureUpload" 
              className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full cursor-pointer hover:bg-blue-600 transition flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 16m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                <path d="M3 16a3 3 0 1 0 6 0a3 3 0 1 0 -6 0m15 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0M3 16h18"></path>
                <path d="M12 12v4"></path>
              </svg>
            </label>
          </div>

          {isEditing ? (
            <div className="w-full space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-600">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="bio" className="block mb-2 text-sm font-medium text-gray-600">
                  Bio
                </label>
                <textarea
                  id="bio"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                />
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={handleSave}
                  className="w-full px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
                >
                  Save
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="w-full px-4 py-2 text-blue-500 border border-blue-500 rounded-lg hover:bg-blue-50 transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
              <p className="text-gray-600 mb-4">{bio}</p>
              <button
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
              >
                Edit Profile
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;