import React from "react";

const LogoutButton = () => {
  const handleLogout = () => {
    // Remove the JWT token from localStorage
    localStorage.removeItem("token");

    // Redirect to login page
    window.location.href = "/login";
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
