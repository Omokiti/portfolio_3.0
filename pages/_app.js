
import "bootstrap/dist/css/bootstrap.css";
import '../styles/globals.css';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import Script from "next/script";
function MyApp({ Component, pageProps }) {
  
useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    AOS.init({
      easing: "ease-out-cubic",
      offset: 50,
      once:true
      
    });
}, []);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
       </Head>
       <Script src="https://unpkg.com/@popperjs/core@2/dist/umd/popper.js"></Script>
      
     
      <Component {...pageProps} />
      
      
    </>
    
    

  );
  
}

export default MyApp;
