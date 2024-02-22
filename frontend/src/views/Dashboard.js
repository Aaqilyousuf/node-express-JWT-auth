import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const Logout = () => {
    localStorage.removeItem("token");
    alert("Logout Successfull");
    navigate("/login");
  };

  return (
    <div>
      Dashboard
      <br></br>
      <button onClick={Logout} style={{ cursor: "pointer" }}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
