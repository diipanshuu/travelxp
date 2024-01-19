import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../contexts/AuthContext';

export default function Validate() {
  const [otp, setOtp] = useState('');
  const { authData } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

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

  return (
    <div>
      <h1>Validate OTP</h1>
      <form onSubmit={handleSubmit}>
        <label>
          OTP:
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
        </label>
        <button type="submit">Validate OTP</button>
      </form>
    </div>
  );
}
