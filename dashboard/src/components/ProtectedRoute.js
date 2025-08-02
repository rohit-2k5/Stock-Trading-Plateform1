import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get("http://localhost:3002/allHoldings", { withCredentials: true });
        setAuthenticated(true);
      } catch {
        setAuthenticated(false);
      }
      setLoading(false);
    };
    checkAuth();
  }, []);

  if (loading) return <p>Loading...</p>;

  return authenticated ? children : <Navigate to="http://localhost:3001/login" />;
};

export default ProtectedRoute;
