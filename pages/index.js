import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();

  const backgroundImageUrl = 'https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; // Replace with the actual URL of your background image

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#dbd3d3',
    cursor: 'pointer',
    textAlign: 'center', // Center-align text
    padding: '20px', // Add padding for better spacing
    fontFamily: 'Arial, sans-serif', // Use a reasonable font family
  };

  const handleSignInClick = () => {
    router.push('/sign-in');
  };

  const signInTextStyle = {
    color: '#291b1b',
    // textDecoration: 'underline',
    fontSize: '2.0em', // Adjust font size for desktop
    marginTop: '15px', // Add top margin for better spacing
  };

  return (
    <div style={backgroundStyle} onClick={handleSignInClick}>
      <h1>Welcome to My Next.js Authentication App</h1>
      <p>
        Get started by providing your mobile number with country code.
        This will take you to the page for mobile number validation,
        which internally calls the sign-in API and then proceeds to the validation page
        with simulated information in the browser console.
      </p>
      <div style={signInTextStyle}>Sign in</div>
    </div>
  );
};

export default Home;