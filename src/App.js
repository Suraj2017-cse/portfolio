import React, { useState, useEffect } from "react";
import AppRoute from "./AppRoute";
import LoadingSpinner from "./Component/LoadingSpinner";

function App() {
  const [isLoading, setIsLoading] = useState(true); // Initialize loading state to true

  useEffect(() => {
    // loading data:
    fetchSomeData().then(() => {
      setIsLoading(false);
    });

    // If there's no data fetching but you want to wait for images/scripts:
    window.onload = () => {
      setIsLoading(false);
    };
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <>
      <AppRoute />
    </>
  );

  async function fetchSomeData() {
    // Simulate a fetch call
    return new Promise((resolve) => setTimeout(resolve, 2000)); // simulate API call
  }
}

export default App;
