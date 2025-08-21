import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./aadharentryscreen.css"; // Make sure to create this SCSS file
import digilockerLogo from "../../assets/images/digilockerimage.png"; // Replace with actual path
import aadhaarIcon from "../../assets/images/aadharicons.png"; // Replace with actual path
import emblemIcon from "../../assets/images/Emblem-of-India-logo-01.png"; // Replace with actual path

const AadhaarEntryScreen = () => {
  const [aadhaar, setAadhaar] = useState(["", "", ""]);
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state);

  const handleInputChange = (value, index) => {
    if (/^\d{0,4}$/.test(value)) {
      const newAadhaar = [...aadhaar];
      newAadhaar[index] = value;
      setAadhaar(newAadhaar);
    }
  };

  const handleSubmit = () => {
    const aadhaarNumber = aadhaar.join("");
    if (aadhaarNumber.length === 12) {
      console.log("Aadhaar Submitted:", aadhaarNumber);
      navigate("/verifyaadhar", { state: state });
      // Proceed with DigiLocker OTP flow
    } else {
      alert("Please enter a valid 12-digit Aadhaar number.");
    }
  };

  return (
    <div className="aadhaar-container">
      <div className="aadhaar-card">
        <div className="top-logo-section">
          <img src={emblemIcon} alt="India Emblem" className="emblem" />
          <img
            src={digilockerLogo}
            alt="DigiLocker Logo"
            className="digilocker-logo"
          />
        </div>

        <h3>Sign up</h3>
        <p className="subtext">It takes just a minute</p>

        <label className="aadhaar-label">
          Enter your Aadhaar Number
          <img src={aadhaarIcon} alt="Aadhaar Icon" className="aadhaar-icon" />
        </label>

        <div className="aadhaar-input-group">
          {aadhaar.map((value, index) => (
            <input
              key={index}
              type="text"
              maxLength="4"
              value={value}
              onChange={(e) => handleInputChange(e.target.value, index)}
              className="aadhaar-input"
            />
          ))}
        </div>

        <p className="info-text">
          DigiLocker uses Aadhaar to enable authentic document access
        </p>

        <button className="next-button" onClick={handleSubmit}>
          Next
        </button>

        <p className="alternate-option">Try another way</p>
      </div>
    </div>
  );
};

export default AadhaarEntryScreen;
