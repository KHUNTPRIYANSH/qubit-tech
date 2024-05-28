import React, { useEffect } from 'react';
import Spline from "@splinetool/react-spline";

const Loader = ({ isVisible, duration }) => {
  useEffect(() => {
    if (!isVisible) return;
    const timer = setTimeout(() => {
      // The loader will automatically hide itself after the duration
    }, duration);

    return () => clearTimeout(timer);
  }, [isVisible, duration]);

  return isVisible ? (
    <div className="loader-container">
      <div className="loader">
        <Spline scene="https://prod.spline.design/3XARl5SPo4DZBAj7/scene.splinecode" width='100vw' />
      </div>
    </div>
  ) : null;
};

export default Loader;
