import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();
      if (data.token) {
        localStorage.setItem("token", data.token);

        alert("Login successufll");
        navigate("/");
      } else {
        alert("something went wrong! check password or email");
      }
    } catch (err) {
      console.log("Error: " + err);
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="form">
      <form onSubmit={handleLogin}>
        <span>Login</span>
        <br></br>
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
        <button type="submit">Login</button>
        <br></br>
        <p>
          Don't have an account ?{" "}
          <Link to="/register" style={{ color: "white" }}>
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
