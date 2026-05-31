import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Home from './pages/Home';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage';
import ResetPasswordPage from './pages/auth/ResetPasswordPage';
import BuildPCPage from './pages/build-pc/BuildPCPage';

import PCComponentsPage from './pages/pc-components/PCComponentsPage';
import GamingPage from './pages/gaming/GamingPage';
import ContactPage from './pages/contact/ContactPage';

import './styles/global.scss';

import SupportWidget from './components/support/SupportWidget';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) return <Navigate to="/login" />;
  return children;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/build-pc" element={<BuildPCPage />} />
          <Route path="/buildpc" element={<Navigate to="/build-pc" replace />} />
          
          {/* Ecommerce Pages */}
          <Route path="/linh-kien-pc" element={<PCComponentsPage />} />
          <Route path="/gaming" element={<GamingPage />} />
          <Route path="/lien-he" element={<ContactPage />} />

          <Route path="/profile" element={
            <ProtectedRoute>
              <div>Profile Page (Protected)</div>
            </ProtectedRoute>
          } />
        </Routes>
        <SupportWidget />
      </Router>
    </AuthProvider>
  );
}

export default App;
