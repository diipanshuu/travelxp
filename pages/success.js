import React from 'react';

const Success = () => {
  const backgroundImageUrl = 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1121&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  const containerStyle = {
    background: `url(${backgroundImageUrl}) center/cover no-repeat fixed`,
    height: '100vh', // Adjust as needed
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white', // Text color on top of the background
  };

  return (
    <div style={containerStyle}>
      <h1>Success!</h1>
      <p>Congratulations! You have successfully signed in.</p>
    </div>
  );
};

export default Success;