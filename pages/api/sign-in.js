// import { randomDigits } from '../../utils';
// import cache from 'memory-cache';

// export default (req, res) => {
//   if (req.method === 'POST') {
//     const { mobileNumber } = req.body;

//     // // Validate mobile number format (you can enhance this validation as needed)
//     // if (!/^\+\d{1,3}\d{6,14}$/.test(mobileNumber)) {
//     //   return res.status(400).json({ error: 'Invalid mobile number format' });
//     // }

//     // Simulate sending a 6-digit random OTP
//     const otp = randomDigits(6);

//       // Store the OTP in the cache with a time-to-live (TTL)
//     cache.put(mobileNumber, otp, 5 * 60 * 1000); // 5 minutes TTL

//     console.log(`OTP stored for ${mobileNumber}: ${otp}`);

//     // You can implement OTP sending logic here (e.g., through SMS, email, etc.)

//     res.status(200).json({ mobileNumber, otp });
//   } else {
//     res.status(405).json({ error: 'Method not allowed' });
//   }
// };



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

      // You can implement OTP sending logic here (e.g., through SMS, email, etc.)

      res.status(200).json({ mobileNumber, otp });
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('Error in sign-in API:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

