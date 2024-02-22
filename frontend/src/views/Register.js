import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();
      if (data) {
        navigate("/login");
      }
      console.log(data);
    } catch (err) {
      console.log("Error: " + err);
    }
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="form">
      <form onSubmit={handleRegister}>
        <span>Register</span>
        <br></br>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label>Email</label>
        <input
          type="text"
          id="email"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label>Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button type="submit">Register</button>
        <br></br>
        <p>
          already have an account?{" "}
          <Link to="/login" style={{ color: "white" }}>
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};
export default Register;
