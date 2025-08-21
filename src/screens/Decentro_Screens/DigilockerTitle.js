import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./digilockertitle.css"; // Add your custom styles here
import aadhaarImg from "../../assets/images/aadhar.jpg"; // Replace with actual path
import digilockerLogo from "../../assets/images/digilockerimage.png"; // Replace with actual path

const DigiLockerLogin = () => {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const handleProceed = () => {
    if (!checked) {
      alert(
        "Please confirm that you have accessed DigiLocker in the last 12 months."
      );
      return;
    }
    // Redirect to DigiLocker authentication
    navigate("/aadharentry", { state: state });
  };

  return (
    <div className="digilocker-container">
      <div className="digilocker-card">
        <div className="header">
          <img
            src={digilockerLogo}
            alt="DigiLocker Logo"
            style={{ height: "100px", width: "350px" }}
          />
        </div>

        <div className="title-section">
          <h3>Sign in</h3>
          <span className="time-badge">Time to Complete: ~1 MIN</span>
        </div>

        <p className="instruction-text">
          Please login to DigiLocker to share documents required to complete KYC
          process.
        </p>

        <div className="aadhaar-image-section">
          <img src={aadhaarImg} alt="Aadhaar Card" className="aadhaar-image" />
        </div>

        <p className="keep-handy-text">
          Requesting you to keep your Aadhaar handy.
        </p>

        <div className="checkbox-section">
          <input
            type="checkbox"
            id="accessedRecently"
            checked={checked}
            onChange={handleCheckboxChange}
            className="me-2"
          />
          I have accessed DigiLocker in the last 12 months.
        </div>

        <p className="otp-text">
          You will receive OTP on your Aadhaar registered mobile number.
        </p>

        <button
          className="proceed-button"
          onClick={handleProceed}
          disabled={!checked}
        >
          Proceed to Digilocker
        </button>

        <p className="secure-note">✅ Your Data is 100% Secure</p>
      </div>
    </div>
  );
};

export default DigiLockerLogin;
