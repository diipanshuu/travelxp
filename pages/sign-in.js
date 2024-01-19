import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../contexts/AuthContext';

const SignIn = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const { setMobileNumberAndOTP } = useAuth();
  const router = useRouter();

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

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Mobile Number:
          <input
            type="text"
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
        </label>
        <button type="submit">Get OTP</button>
      </form>
    </div>
  );
};

export default SignIn;
