import "./Style.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (
      storedUser &&
      storedUser.email === loginData.email &&
      storedUser.password === loginData.password
    ) {
      localStorage.setItem("isAuthenticated", "true");
      alert("Login Successful!");
      navigate("/"); 
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="Login p-4 ">
          <h1
            style={{ color: "white", alignmentItem: "centre" }}
            className="text-center fw-bold"
          >
            Login
          </h1>
          <p className="text-center fw-bold">Welcome Back</p>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              className="input-group form-control rounded-4 mb-3"
              style={{ marginRight: "20px" }}
              onChange={handleChange}
              name="email"
              placeholder=" Email"
              required
            />
            <input
              type="password"
              className="input-group form-control rounded-4"
              onChange={handleChange}
              name="password"
              placeholder="Password"
              required
            />
            <br />
            <p className="text-end fs-6" style={{ color: "white" }}>
              Forgot Password?
            </p>
            <button
              type="submit"
              className="btn-gradient btn btn-primary w-100 py-2 rounded-pill mb-2"
              style={{
                background: "linear-gradient(135deg,rgb(26, 0, 78), #8E2DE2)",
                border: "none",
                 color: "white"
              }}
            >
              Login
            </button>
          </form>

          <p className="fs-6">
            Don't Have an account?{" "}
            <Link
              to="/register"
              style={{ color: "blue", textDecoration: "none" }}
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
