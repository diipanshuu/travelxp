import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../contexts/AuthContext';
import Joi from 'joi';

export default function Validate() {
  const [otp, setOtp] = useState('');
  const { authData } = useAuth();
  const router = useRouter();
  const backgroundImageUrl = 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D';

   // Joi schema for OTP validation
   const otpSchema = Joi.string().pattern(/^\d{6}$/).required();
  
  const handleSubmit = async (e) => {
    e.preventDefault();

        // Validate OTP using Joi schema
        const validationResult = otpSchema.validate(otp);
        if (validationResult.error) {
          alert(`Invalid OTP! Please enter valid 6 digit OTP.`);
          return;
        }

    // Call the API to validate OTP and get tokens
    const response = await fetch('/api/validate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ mobileNumber: authData.mobileNumber, otp }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Access Token:', data.accessToken);
      console.log('Refresh Token:', data.refreshToken);

      // Optionally, you can store tokens in context or state for further use

      // Redirect to some success page
      router.push('/success');
    } else {
      console.error('Failed to validate OTP');
    }
  };

const containerStyle = {
  backgroundImage: `url(${backgroundImageUrl})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#5d1515',
  textAlign: 'center',
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
};

const formStyle = {
  marginTop: '20px',
  width: '300px',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '8px',
};

const inputStyle = {
  padding: '10px',
  margin: '10px',
  fontSize: '1em',
};

const buttonStyle = {
  padding: '10px',
  fontSize: '1em',
  background: '#5d1515',
  color: 'white',
  cursor: 'pointer',
};

return (
  <div style={containerStyle}>
    <h1>Enter the simulated console OTP</h1>
    <form style={formStyle} onSubmit={handleSubmit}>
      <label>
        Enter OTP:
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          style={inputStyle}
        />
      </label>
      <br />
      <button type="submit" style={buttonStyle}>
        Validate OTP
      </button>
    </form>
  </div>
);
};