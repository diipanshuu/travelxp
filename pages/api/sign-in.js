import { randomDigits } from '../../utils';

export default (req, res) => {
  if (req.method === 'POST') {
    const { mobileNumber } = req.body;

    // Validate mobile number format (you can enhance this validation as needed)
    if (!/^\+\d{1,3}\d{6,14}$/.test(mobileNumber)) {
      return res.status(400).json({ error: 'Invalid mobile number format' });
    }

    // Simulate sending a 6-digit random OTP
    const otp = randomDigits(6);

    // You can implement OTP sending logic here (e.g., through SMS, email, etc.)

    res.status(200).json({ mobileNumber, otp });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
