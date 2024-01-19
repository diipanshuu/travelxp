import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState({
    mobileNumber: null,
    otp: null,
  });

  const setMobileNumberAndOTP = (mobileNumber, otp) => {
    setAuthData({ mobileNumber, otp });
  };

  return (
    <AuthContext.Provider value={{ authData, setMobileNumberAndOTP }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
