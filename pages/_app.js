// pages/_app.js
import '../styles/globals.css'; // Make sure the path to the CSS file is correct

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
