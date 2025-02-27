// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// // import Navbar from "./components/Navbar";
// import { Dashboard } from "@mui/icons-material";
// import Consultation from "./pages/Consultation";
// import Doctors from "./pages/Doctors";
// import Appointments from "./pages/Appointments";
// import Profile from "./pages/Profile";
// import './App.css';

// function App() {
//   return (
//     <Router>
//       {/* <Navbar /> */}
//       <Routes>
//         <Route path="/" element={<Dashboard />} />
//         <Route path="/consultation" element={<Consultation />} />
//         <Route path="/doctors" element={<Doctors />} />
//         <Route path="/appointments" element={<Appointments />} />
//         <Route path="/profile" element={<Profile />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashboardScreen from './pages/DashboardScreen';
import Profile from './pages/Profile';
import Doctor from './pages/Doctors';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardScreen />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/doctors" element={<Doctor />} />
      </Routes>
    </Router>
  );
}

export default App;
