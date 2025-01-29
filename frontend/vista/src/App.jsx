import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import Authentication from './pages/authentication';



function App() {
  return (
    <div>
     <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<LandingPage/>} />
        <Route path="/auth" element={<Authentication />} />
        {/* <Route path="/meeting" element={<Meeting />} /> */}
      </Routes>
     </Router>
    </div>
  )
}

export default App
