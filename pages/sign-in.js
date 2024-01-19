import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../contexts/AuthContext';

const SignIn = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const { setMobileNumberAndOTP } = useAuth();
  const router = useRouter();
  const backgroundImageUrl = 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D';

  const handleSubmit = async (e) => {
    e.preventDefault();



    // Validate mobile number format (you can enhance this validation as needed)
    if (!/^\+\d{1,3}\d{10}$/.test(mobileNumber)) {
      // Display an alert if the mobile number is invalid
      alert('Invalid mobile number format. Please enter a valid mobile number.');
      return;
    }



    // Call the API to get OTP
    const response = await fetch('/api/sign-in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ mobileNumber }),
    });

    if (response.ok) {
      const data = await response.json();




      console.log('Data received from API:', data);
      // Log to check if data.mobileNumber and data.otp have valid values
      console.log('Mobile Number:', data.mobileNumber);
      console.log('OTP:', data.otp);





      setMobileNumberAndOTP(data.mobileNumber, data.otp);

      // Redirect to the page where the user enters OTP
      router.push('/validate');
    } else {
      console.error('Failed to get OTP');
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
    color: 'white',
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  };

  const formStyle = {
    marginTop: '20px',
    width: '300px', // Set a fixed width for better readability
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  };

  const inputStyle = {
    padding: '10px',
    margin: '10px',
    fontSize: '1em',
  };

  const buttonStyle = {
    padding: '10px',
    fontSize: '1em',
    background: '#2e3c10',
    color: 'white',
    cursor: 'pointer',
  };

return (
  <div style={containerStyle}>
    <h1>Enter number with country code</h1>
    <form style={formStyle} onSubmit={handleSubmit}>
      <label>
        Mobile Number :
        <input
          type="text"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          style={inputStyle}
        />
      </label>
      <br />
      <button type="submit" style={buttonStyle}>
        Get OTP
      </button>
    </form>
    <p>
        Get the simulated OTP in the browser console.
      </p>
  </div>
);
};


export default SignIn;
