import React from 'react';
import './index.css'; // Adjust the path if your file is named differently
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import Logout from './components/Logout';
import SignUpPage from './pages/SignupPage';
import DashboardPage from './pages/DashboardPage';
//import Navigation from './components/Navigation';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <Router>
    <NavigationBar />
      {/* <Navigation /> */}
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
