// // utils/globals.js

// // Export a global object for OTP storage
// const globals = {
//     otpStore: {},
//   };
  
//   export default globals;
  



// utils/otpStore.js

const otpStore = {};

export const storeOTP = (mobileNumber, otp) => {
  otpStore[mobileNumber] = otp;
};

export const retrieveOTP = (mobileNumber) => {
  return otpStore[mobileNumber];
};

export const deleteOTP = (mobileNumber) => {
  delete otpStore[mobileNumber];
};
