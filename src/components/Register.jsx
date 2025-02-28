import "./Style.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const Register =()=> {

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    localStorage.setItem("user", JSON.stringify(formData)); 
    navigate("/login");
  };

    return (
      <>
      <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="Register p-4 ">
        <h1 style={{color:"white"}} className="text-center fw-bold">Sign Up</h1>
        <p className="text-center fw-bold">Welcome Back</p>
        <form onSubmit={handleSubmit}>
        <div className="d-flex">
        <input
          type="text"
          className="input-group form-control rounded-4 mb-3"
          style={{ marginRight: "20px" }}
          onChange={handleChange}
          name="name"
          placeholder="Name"
          required
        />
        <input
          type="text"
          className="input-group form-control rounded-4 mb-3"
          style={{ marginRight: "20px" }}
          onChange={handleChange}
          name="username"
          placeholder="Username"
          required
        />
        </div>
        <div className="d-flex">
        <input
          type="email"
          className="input-group form-control rounded-4 mb-3"
          style={{ marginRight: "20px" }}
          onChange={handleChange}
          name="email"
          placeholder="Email"
          required
        />
        <input
          type="number"
          className="input-group form-control rounded-4 mb-3"
          style={{ marginRight: "20px" }}
          onChange={handleChange}
          name="phone"
          placeholder="Phone No."
          required
        />
        </div>
        <div className="d-flex">
        <input
          type="password"
          className="input-group form-control rounded-4"
          style={{ marginRight: "20px" }}
          onChange={handleChange}
          name="password"
          placeholder="Password"
          required
        />
        <input
          type="password"
          className="input-group form-control rounded-4"
          style={{ marginRight: "20px" }}
          onChange={handleChange}
          name="confirmPassword"
          placeholder="Confirm Password"
          required
        />
        </div>
        <br />
        <button
          className="btn-gradient btn w-100 py-2 rounded-pill mb-2 "
          style={{
            background: "linear-gradient(135deg,rgb(26, 0, 78), #8E2DE2)", 
            border: "none",
            color: "white"
          }}>Register
        </button>
        </form>
        <p className="fs-6 text-center">Already User | <Link to="/login" style={{ color: "blue", textDecoration: "none" }}>Login</Link></p>
      </div>
      </div>
      </>
    )
  }
  
  export default Register