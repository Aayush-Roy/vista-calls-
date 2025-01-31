import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Authentication from './pages/authentication';
import { AuthProvider } from './contexts/AuthContext';



function App() {
  return (
    <div>
     <Router>
      <AuthProvider>

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<LandingPage/>} />
        <Route path="/auth" element={<Authentication />} />
        {/* <Route path="/meeting" element={<Meeting />} /> */}
      </Routes>
      </AuthProvider>
     </Router>
    </div>
  )
}

export default App
