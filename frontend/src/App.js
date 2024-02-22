import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Register from "./views/Register";
import "./App.css";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  // const {token} = useContext(AuthContext)
  // console.log(token)
  const ProtectedRoute = () => {
    const { token } = useContext(AuthContext);
    console.log(token);
    return token ? <Outlet /> : <Navigate to="/login" />;
  };
  return (
    <div className="App">
      <h1>JWT Auth</h1>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
