// pages/api/validate.js

import jwt from 'jsonwebtoken';
import { retrieveOTP, deleteOTP } from '../../utils/otpRepository';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { mobileNumber, otp } = req.body;

    // Check if entered OTP matches the stored OTP
    const storedOtp = await retrieveOTP(mobileNumber);



    console.log(`Mobile Number: ${mobileNumber}`);
    console.log(`Entered OTP: ${otp}`);
    console.log(`Stored OTP: ${storedOtp}`);

    if (otp.toString() !== storedOtp.toString()) {
      console.log(`Invalid OTP entered for ${mobileNumber}`);
      return res.status(401).json({ error: 'Invalid OTP' });
    }

    console.log(`Valid OTP entered for ${mobileNumber}: ${otp}`);

    // Generate JWT tokens using environment variables
    const accessToken = jwt.sign({ mobileNumber }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '5m' });
    const refreshToken = jwt.sign({ mobileNumber }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1h' });

    // Remove the validated OTP
    await deleteOTP(mobileNumber);

    res.status(200).json({ accessToken, refreshToken });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
