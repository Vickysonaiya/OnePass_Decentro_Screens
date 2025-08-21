import React, { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./securitypin.css";
import digilockerLogo from "../../assets/images/digilockerimage.png"; // Replace with actual path
import emblemIcon from "../../assets/images/Emblem-of-India-logo-01.png"; // Replace with actual path
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SecurityPinScreen = () => {
  const navigate = useNavigate();
  const [pin, setPin] = useState(["", "", "", "", "", ""]);
  const [showPin, setShowPin] = useState(false);
  const inputRefs = useRef([]);
  const { state } = useLocation();
  console.log(state);

  const handleChange = (value, index) => {
    if (/^[0-9]?$/.test(value)) {
      const newPin = [...pin];
      newPin[index] = value;
      setPin(newPin);
      if (value && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !pin[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = () => {
    const pinCode = pin.join("");
    if (pinCode.length !== 6) {
      alert("Please enter a 6-digit Security PIN");
      return;
    }
    if (pinCode !== "852456") {
      alert("Incorrect Security PIN. Please try again.");
      return;
    }
    console.log("Submitted PIN:", pinCode);
    navigate("/concentaadhar", { state: state });
  };

  return (
    <div className="pin-container">
      <div className="pin-card">
        <div className="top-logo-section">
          <img src={emblemIcon} alt="Emblem" className="emblem" />
          <img
            src={digilockerLogo}
            alt="DigiLocker"
            className="digilocker-logo"
          />
        </div>

        <h4>You are already registered with DigiLocker</h4>
        <p className="description">
          6 digit PIN provides extra security to your account with two factor
          authentication. Don’t disclose your Security PIN to anyone.
        </p>

        <label className="pin-label">
          Please enter your 6 digit Security PIN to Signin
        </label>
        <div className="pin-input-group">
          {pin.map((digit, index) => (
            <input
              key={index}
              type={showPin ? "text" : "password"}
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => (inputRefs.current[index] = el)}
              className="pin-input"
            />
          ))}
          <div className="eye-icon" onClick={() => setShowPin(!showPin)}>
            {showPin ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>

        <p className="forgot-pin">Forgot my PIN</p>

        <button className="done-button" onClick={handleSubmit}>
          Done
        </button>
      </div>
    </div>
  );
};

export default SecurityPinScreen;
