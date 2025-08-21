import React, { useState } from 'react';
import './PhoneNumberScreen.css';

function PhoneNumberScreen() {
  const [phone, setPhone] = useState('');

  const handleChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    setPhone(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Phone number submitted: ${phone}`);
  };

  return (
    <div className="phone-screen-bg">
      <form className="phone-form" onSubmit={handleSubmit}>
        <label htmlFor="phone">Phone Number</label>
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
