import React from "react";
import { UserProvider } from "./UserContext";
import ProfileForm from "./ProfileForm";
import Profile from "./Profile";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const App = () => {
  return (
    <UserProvider>
      <Router>
        <div className="min-h-screen bg-blue-200 p-4">
          <Routes>
            <Route path="/" element={<ProfileForm />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;
