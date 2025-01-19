import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfileList from "./components/ProfileList";
import Map from "./components/Map";
import AdminPanel from "./components/AdminPanel";

const App = () => {
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: "Onkar Jadhav",
      description: "Software Engineer",
      photo: "https://via.placeholder.com/150",
      address: { lat: 18.5204, lng: 73.8567 },
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<ProfileList profiles={profiles} />}
          />
          <Route
            path="/profile/:id"
            element={<Map address={profiles[0].address} />}
          />
          <Route
            path="/admin"
            element={<AdminPanel profiles={profiles} setProfiles={setProfiles} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
