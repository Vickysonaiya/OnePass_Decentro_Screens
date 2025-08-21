import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./concentscreen.css";
import digilockerLogo from "../../assets/images/digilockerimage.png";
import {
  FaUser,
  FaEnvelope,
  FaIdCard,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaImage,
  FaEdit,
} from "react-icons/fa";

const ConsentScreen = () => {
  const [consentDate, setConsentDate] = useState("01-August-2025");
  const [isEditingDate, setIsEditingDate] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state);

  const handleAllow = () => {
    // Submit consent data here if needed
    navigate("/faceMatch", { state: state });
  };

  const handleEdit = () => {
    setIsEditingDate(true);
  };

  const handleDateChange = (e) => {
    setConsentDate(e.target.value);
    setIsEditingDate(false);
  };

  return (
    <div className="consent-container">
      <div className="consent-card">
        <div className="top-header">
          <img
            src={digilockerLogo}
            alt="DigiLocker"
            className="digilocker-logo"
          />
          <div className="shield-icon">🛡️</div>
        </div>

        <p className="consent-text">
          Please provide your consent to share the following with{" "}
          <strong>Decentro Web Dev</strong>:
        </p>

        <div className="section">
          <strong>Issued Documents (1)</strong>
          <div className="item">
            <FaIdCard /> Aadhaar Card (XXXX1234)
          </div>
        </div>

        <div className="section">
          <input type="checkbox" /> DigiLocker Drive
        </div>

        <div className="section">
          <div className="item">
            <FaUser /> Profile information –{" "}
            <span className="gray">Name, Date of Birth, Gender</span>
          </div>
          <div className="item">
            <FaEnvelope /> Get your Email
          </div>
          <div className="item gray">Not available</div>
          <div className="item">
            <FaUser /> Get your care of person name
          </div>
          <div className="item">
            <FaMapMarkerAlt /> Get your address
          </div>
          <div className="item">
            <FaImage /> Get your profile picture
          </div>
        </div>

        <div className="section">
          <div className="item">
            <FaCalendarAlt /> Consent validity date (Today + 30 days):
            {!isEditingDate ? (
              <>
                <span className="consent-date"> {consentDate}</span>
                <FaEdit className="edit-icon" onClick={handleEdit} />
              </>
            ) : (
              <input
                type="date"
                className="date-input"
                onBlur={handleDateChange}
                autoFocus
              />
            )}
          </div>
        </div>

        <div className="section">
          <div className="item">
            <FaIdCard /> Purpose – <strong>Know Your Customer</strong>
          </div>
        </div>

        <p className="disclaimer">
          Consent validity is subject to applicable laws.
          <br />
          By clicking <strong>‘Allow’</strong>, you are giving consent to share
          with <strong>Decentro Web Dev</strong>.
        </p>

        <div className="button-group">
          <button className="deny-button">Deny</button>
          <button className="allow-button" onClick={handleAllow}>
            Allow
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsentScreen;
