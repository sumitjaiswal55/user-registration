import React, { useEffect, useState } from "react";

const Home = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h2>Welcome to Home Page</h2>

      {userData ? (
        <div
          style={{
            color: "black",
            background: "rgba(255, 255, 255, 0.1)",
            padding: "20px",
            borderRadius: "10px",
          }}
        >
          <h3 className="mb-3" style={{ textAlign: "center" }}>
            User Information
          </h3>
          <p>
            <strong>Name:</strong> {userData.name}
          </p>
          <p>
            <strong>Username:</strong> {userData.username}
          </p>
          <p>
            <strong>Email:</strong> {userData.email}
          </p>
          <p>
            <strong>Phone No:</strong> {userData.phone}
          </p>
        </div>
      ) : (
        <p>No user data found. Please login.</p>
      )}

    </div>
  );
};

export default Home;
