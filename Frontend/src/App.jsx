import Header from "./components/layout/Header";
import SignupPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import UploadResumePage from "./pages/ApplyPage";
import AdminDashboard from "./pages/AdminApplicationPage";
import PrivateAdminRoute from "./routes/PrivateAdminRoute";
import ProtectedUserRoute from "./routes/ProtectedUserRoute";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/LandingPage";
import React from "react";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/apply"
          element={
            <ProtectedUserRoute>
              <UploadResumePage />
            </ProtectedUserRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedUserRoute>
              <ProfilePage />
            </ProtectedUserRoute>
          }
        />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/SignUp" element={<SignupPage />} />
        <Route
          path="/admin-dashboard"
          element={
            <PrivateAdminRoute>
              <AdminDashboard />
            </PrivateAdminRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
