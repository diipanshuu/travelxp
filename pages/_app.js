// import '@/styles/globals.css'

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }


import { AuthProvider } from '../contexts/AuthContext';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <>
        <Component {...pageProps} />
        <Analytics />
      </>
    </AuthProvider>
  );
}

export default MyApp;
