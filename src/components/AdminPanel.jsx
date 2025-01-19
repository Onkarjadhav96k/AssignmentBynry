import React, { useState } from "react";

const AdminPanel = ({ profiles, setProfiles }) => {
  const [newProfile, setNewProfile] = useState({
    name: "",
    description: "",
    photo: "",
    address: "",
  });

  const handleAddProfile = () => {
    setProfiles([...profiles, { ...newProfile, id: profiles.length + 1 }]);
    setNewProfile({ name: "", description: "", photo: "", address: "" });
  };

  const handleDeleteProfile = (id) => {
    setProfiles(profiles.filter((profile) => profile.id !== id));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <input
          type="text"
          placeholder="Name"
          value={newProfile.name}
          onChange={(e) =>
            setNewProfile({ ...newProfile, name: e.target.value })
          }
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Description"
          value={newProfile.description}
          onChange={(e) =>
            setNewProfile({ ...newProfile, description: e.target.value })
          }
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Photo URL"
          value={newProfile.photo}
          onChange={(e) =>
            setNewProfile({ ...newProfile, photo: e.target.value })
          }
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Address"
          value={newProfile.address}
          onChange={(e) =>
            setNewProfile({ ...newProfile, address: e.target.value })
          }
          className="border p-2 rounded"
        />
      </div>
      <button
        onClick={handleAddProfile}
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
      >
        Add Profile
      </button>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-4">Profiles</h3>
        <div className="grid gap-4">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className="flex justify-between items-center bg-white shadow p-4 rounded"
            >
              <h4 className="font-medium">{profile.name}</h4>
              <button
                onClick={() => handleDeleteProfile(profile.id)}
                className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
