// import jwt from 'jsonwebtoken';
// import cache from 'memory-cache';

// export default (req, res) => {
//   if (req.method === 'POST') {
//     const { mobileNumber, otp } = req.body;

//     // Validate mobile number and OTP (you can enhance this validation as needed)
//     if (!/^\+\d{1,3}\d{6,14}$/.test(mobileNumber) || !/^\d{6}$/.test(otp)) {
//       return res.status(400).json({ error: 'Invalid mobile number or OTP format' });
//     }

//     // // Validate the OTP
//     // const isOtpValid = validateOtp(mobileNumber, otp);

//     // if(!isOtpValid){
//     //   return res.status(401).json({ error: 'Invalid OTP' });
//     // }


//      // Check if entered OTP matches the stored OTP in the shared globals.otpStore object
//       // Check if entered OTP matches the stored OTP in the cache
//     const storedOtp = cache.get(mobileNumber);


//      if (otp !== storedOtp) {
//       console.log(`Invalid OTP entered for ${mobileNumber}`);
//       return res.status(401).json({ error: 'Invalid OTP' });
//     }

//     console.log(`Valid OTP entered for ${mobileNumber}: ${otp}`);

//     // Remove the validated OTP entry from the cache
//     cache.del(mobileNumber);

//     // Generate JWT tokens using environment variables
//     const accessToken = jwt.sign({ mobileNumber }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '5m' });
//     const refreshToken = jwt.sign({ mobileNumber }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1h' });

//     res.status(200).json({ accessToken, refreshToken });
//   } else {
//     res.status(405).json({ error: 'Method not allowed' });
//   }
// };

// // // Example OTP validation function
// // const validateOtp = (mobileNumber, enteredOtp) => {
// //   return true;
// // };







// pages/api/validate.js

import jwt from 'jsonwebtoken';
import { retrieveOTP, deleteOTP } from '../../utils/otpRepository';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { mobileNumber, otp } = req.body;

    // Validate mobile number and OTP format
    if (!/^\+\d{1,3}\d{6,14}$/.test(mobileNumber) || !/^\d{6}$/.test(otp)) {
      return res.status(400).json({ error: 'Invalid mobile number or OTP format' });
    }

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

    // Remove the validated OTP using the shared module
    await deleteOTP(mobileNumber);

    res.status(200).json({ accessToken, refreshToken });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
