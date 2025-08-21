import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PhoneNumberScreen.css';

function PhoneNumberScreen() {
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setPhone(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/digilockerentry', { state: { phone } });
  };

  return (
    <div className="phone-screen-bg">
      <form className="phone-form" onSubmit={handleSubmit}>
        <label htmlFor="phone">DigiLocker Phone Number</label>
        <input
          id="phone"
          type="text"
          value={phone}
          onChange={handleChange}
          maxLength={10}
          placeholder="Enter phone number"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PhoneNumberScreen;
