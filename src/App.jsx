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
      photo: "src/assets/My New Photo (1).jpg",
      address: { lat: 18.5204, lng: 73.8567 },
    },
    {
      id:2,
      name:"Ram",
      description: "Web Developer",
      photo:"src/assets/rr.jpeg",
      address:{lat: 17.6612,lng: 75.6697},
    },
    {
      id:3,
      name:"Sham",
      description: "React Developer",
      photo:"src/assets/sham.jpeg",
      address:{lat: 17.6612,lng: 75.6697},

    },
    {
      id:4,
      name:"Sita",
      description: "Manual Test Engineer",
      photo:"src/assets/sita.jpeg",
      address:{lat: 17.6612,lng: 75.6697},

    },
    {
      id:5,
      name:"Gita",
      description: "HR",
      photo:"src/assets/geeta.jpeg",
      address:{lat: 17.6612,lng: 75.6697},

    }
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
