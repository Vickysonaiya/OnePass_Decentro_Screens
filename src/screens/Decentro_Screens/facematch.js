import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCamera } from 'react-icons/fa';
import './facematch.css';

const SuccessModal = ({ message }) => (
  <div className="verification-modal-overlay">
    <div className="verification-modal-content">
      <div className="success-animation">
        <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
          <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
          <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
        </svg>
      </div>
      <h4>Verification Complete!</h4>
      <p>{message}</p>
    </div>
  </div>
);

const FaceMatch = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const canvasRef = useRef(null); 
  const [stream, setStream] = useState(null);
  const [isVerified, setIsVerified] = useState(false);

  // Function to start the camera
  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user' }, 
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
      alert("Could not access the camera. Please check permissions and try again.");
    }
  };

  useEffect(() => {
    startCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
    };
  }, []); 

  const handleCaptureAndVerify = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;

      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;

      const context = canvas.getContext('2d');
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }
      
      setIsVerified(true);

      setTimeout(() => {
        navigate('/');
      }, 2500);
    }
  };

  return (
    <div className="facematch-container">
      <h2 className="facematch-title">Identity Verification</h2>
      <p className="facematch-subtitle">Center your face in the oval and click the button</p>
      
      <div className="video-wrapper">
        <video ref={videoRef} autoPlay playsInline muted className="facematch-video"></video>
        <div className="facematch-oval"></div>
      </div>
      
      <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>

      <button className="facematch-btn" onClick={handleCaptureAndVerify} disabled={!stream}>
        <FaCamera style={{ marginRight: 8 }} /> Face Match
      </button>
      {isVerified && <SuccessModal message="You will be redirected shortly." />}
    </div>
  );
};

export default FaceMatch;