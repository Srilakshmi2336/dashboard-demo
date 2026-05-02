import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // we'll add styles here
import logo from "../assets/logo.png";

function Login({ setIsLoggedIn }) {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    if (username && password) {
      setIsLoggedIn(true);
      navigate("/dashboard");
    }
  };

  return (
    <div className="login-container">
      
      {/* LEFT SIDE */}
      <div className="login-left">
        <img 
          src={logo} 
          alt="logo" 
          className="logo"
        />
        {/* <h2>Your App Name</h2> */}
      </div>

      {/* RIGHT SIDE */}
      <div className="login-right">
        <div className="login-box">
          <h2>Login</h2>

          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleSubmit}>Login</button>
        </div>
      </div>
    </div>
  );
}

export default Login;