// utils/otpRepository.js

import { connectToDatabase } from './db';

export const storeOTP = async (mobileNumber, otp) => {
  const db = await connectToDatabase();
  await db.collection('otpCollection').insertOne({ mobileNumber, otp });
};

export const retrieveOTP = async (mobileNumber) => {
  const db = await connectToDatabase();
  const result = await db.collection('otpCollection').findOne({ mobileNumber });
  return result ? result.otp : null;
};

export const deleteOTP = async (mobileNumber) => {
  const db = await connectToDatabase();
  await db.collection('otpCollection').deleteOne({ mobileNumber });
};
