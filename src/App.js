import React, { useState, useEffect } from "react";
import Home from "./pages/home/Home";
import "./App.css";
import Projects from "./pages/Projects";
import Loader from "./components/Loader";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const loaderMinDuration = 7000; // Minimum duration for the loader to be visible (5 seconds)

  useEffect(() => {
    // Simulate content loading
    const loadTimer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000); // Adjust this duration to match your actual loading time

    // Ensure loader is shown for at least 5 seconds
    const loaderTimer = setTimeout(() => {
      setShowLoader(false);
    }, loaderMinDuration);

    // Clean up timers on component unmount
    return () => {
      clearTimeout(loadTimer);
      clearTimeout(loaderTimer);
    };
  }, []);

  return (
    <div>
      <Loader isVisible={showLoader} />
      {!showLoader && (
        <>
          <div id="cursor"></div>
          <Home />
          {/* <Projects/> */}
        </>
      )}
    </div>
  );
};

export default App;
