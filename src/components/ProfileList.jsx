import React from "react";
import { useNavigate } from "react-router-dom";

const ProfileList = ({ profiles }) => {
  const navigate = useNavigate();

  const handleViewMap = (profile) => {
    navigate(`/profile/${profile.id}`, { state: { profile } });
  };

  return (
    <div className="flex flex-wrap gap-6 p-6">
      {profiles.map((profile) => (
        <div
          key={profile.id}
          className="bg-white shadow-md rounded-lg p-4 w-80 text-center"
        >
          <img
            src={profile.photo}
            alt={profile.name}
            className="w-24 h-24 mx-auto rounded-full mb-4"
          />
          <h3 className="text-lg font-semibold">{profile.name}</h3>
          <p className="text-gray-600 mb-4">{profile.description}</p>
          <button
            onClick={() => handleViewMap(profile)}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            View on Map
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProfileList;
