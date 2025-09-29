import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';
import AlumniPortal from './pages/AlumniPortal';
import StudentPortal from './pages/StudentPortal';
import SearchPage from './pages/SearchPage';
import DonatePage from './pages/DonatePage';
import SubscribePage from './pages/SubscribePage';

function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="admin" element={<AdminDashboard />} />
            <Route path="alumni" element={<AlumniPortal />} />
            <Route path="student" element={<StudentPortal />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="donate" element={<DonatePage />} />
            <Route path="subscribe" element={<SubscribePage />} />
          </Route>
        </Routes>
      </Router>
    </AppProvider>
  );
}

export default App;