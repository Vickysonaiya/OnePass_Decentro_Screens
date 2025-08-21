import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./verifyaadharotp.css"; // Custom styles
import digilockerLogo from "../../assets/images/digilockerimage.png"; // Replace with actual path
import emblemIcon from "../../assets/images/Emblem-of-India-logo-01.png"; // Replace with actual path

const VerifyAadhaarOtp = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const { state } = useLocation();
  console.log(state);

  const handleSubmit = () => {
    if (otp.length !== 6) {
      alert("Please enter a valid 6-digit OTP.");
      return;
    }

    if (otp !== "852456") {
      alert("Incorrect OTP. Please try again.");
      return;
    }

    console.log("Submitted OTP:", otp);
    // Submit OTP to DigiLocker backend for validation
    navigate("/securitypin", { state: state });
  };

  return (
    <div className="otp-container">
      <div className="otp-card">
        <div className="top-logo-section">
          <img src={emblemIcon} alt="India Emblem" className="emblem" />
          <img
            src={digilockerLogo}
            alt="DigiLocker Logo"
            className="digilocker-logo"
          />
        </div>

        <h3>Verify Aadhaar OTP</h3>

        <div className="otp-message">
          UIDAI has sent a temporary OTP to your mobile Number (valid for 10
          mins).
        </div>

        <label htmlFor="otp-input" className="otp-label">
          Please enter OTP to complete verification
        </label>
        <input
          id="otp-input"
          type="text"
          maxLength="6"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className="otp-input"
        />

        <p className="otp-wait-text">
          Didn’t receive OTP? Wait few minutes for the OTP to arrive. Do not
          refresh or close!
        </p>

        <button className="submit-button" onClick={handleSubmit}>
          Submit
        </button>

        <p className="resend-section">
          Didn’t get the OTP? <span className="resend-link">Resend OTP</span>
        </p>

        <p className="alternate-option">
          <a href="/www.google.com">Create your account using mobile</a>
        </p>
      </div>
    </div>
  );
};

export default VerifyAadhaarOtp;
