import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Digilocker from './screens/Decentro_Screens/DigilockerTitle'; // Adjust the import path as necessary
import Aadharentry from './screens/Decentro_Screens/aadharEntryScreen'; // Adjust the import path as necessary
import Verifyaadhar from './screens/Decentro_Screens/VerifyAadharOtp'; // Adjust the import path as necessary
import Securitypin from './screens/Decentro_Screens/SecurityPin'; // Adjust the import path as necessary
import Concentaadhar from './screens/Decentro_Screens/ConcentScreen'; // Adjust the import path as necessary
import Facematch from './screens/Decentro_Screens/facematch'; // Adjust the import path as necessary
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/digilockerentry" element={<Digilocker />} />
        <Route path="/aadharentry" element={<Aadharentry />} />
        <Route path="/verifyaadhar" element={<Verifyaadhar />} />
        <Route path="/securitypin" element={<Securitypin />} />
        <Route path="/concentaadhar" element={<Concentaadhar />} />
        <Route path="/faceMatch" element={<Facematch />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
