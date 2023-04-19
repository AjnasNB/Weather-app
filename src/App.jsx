import React, { useState, useEffect } from "react";
import Loading from "./components/Loading";
import Weather from "./components/Weather";


const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return isLoading ? <Loading /> : <Weather />;
};

export default App;
