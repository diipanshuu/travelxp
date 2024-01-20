// pages/api/sign-in.js

import { randomDigits } from '../../utils';
import { storeOTP } from '../../utils/otpRepository';

export default async (req, res) => {
  try {
    if (req.method === 'POST') {
      const { mobileNumber } = req.body;

      // Simulate sending a 6-digit random OTP
      const otp = randomDigits(6);

      // Store the OTP in the database
      await storeOTP(mobileNumber, otp);

      console.log(`User created and OTP stored for ${mobileNumber}: ${otp}`);

      res.status(200).json({ mobileNumber, otp });
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Error in sign-in API:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

