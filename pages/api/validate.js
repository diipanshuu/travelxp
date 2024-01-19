import jwt from 'jsonwebtoken';

export default (req, res) => {
  if (req.method === 'POST') {
    const { mobileNumber, otp } = req.body;

    // Validate mobile number and OTP (you can enhance this validation as needed)
    if (!/^\+\d{1,3}\d{6,14}$/.test(mobileNumber) || !/^\d{6}$/.test(otp)) {
      return res.status(400).json({ error: 'Invalid mobile number or OTP format' });
    }

    // Validate the OTP (you can implement your own logic here)

    // Generate JWT tokens using environment variables
    const accessToken = jwt.sign({ mobileNumber }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '5m' });
    const refreshToken = jwt.sign({ mobileNumber }, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '1h' });

    res.status(200).json({ accessToken, refreshToken });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};
