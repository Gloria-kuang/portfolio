import React, { useEffect } from "react";
import Routes from "./router/Routes";
import ScrollToTop from "./components/ScrollToTop";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "gloria-portfolio.firebaseapp.com",
    projectId: "gloria-portfolio",
    storageBucket: "gloria-portfolio.appspot.com",
    messagingSenderId: "970917195879",
    appId: "1:970917195879:web:bd2450df840538687124c2",
    measurementId: "G-5KR930K1YT"
  };
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="beny_tm_all_wrap">
      <ScrollToTop />
      <Routes />
    </div>
  );
};

export default App;
