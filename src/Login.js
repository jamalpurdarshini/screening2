


import React, { useState } from "react";

function Login({ setUser, setIsLogin, setIsSignup }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const trimmedUsername = username.trim();

    if (!trimmedUsername || !password) {
      alert("Please enter both username and password");
      return;
    }

    const allUsers = JSON.parse(localStorage.getItem("users")) || {};
    const user = allUsers[trimmedUsername];

    if (user && user.password === password) {
      setUser(user);
      setIsLogin(true);
      setUsername("");
      setPassword("");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="signup-container">
      <h2 className="signup-heading">Login</h2>

      <input
        className="signup-input"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        className="signup-input"
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="signup-button"
        onClick={handleLogin}
        disabled={!username.trim() || !password}
      >
        Login
      </button>

      <p className="signup-paragraph">
        Don't have an account?{" "}
        <button
          className="signup-link-button"
          onClick={() => setIsSignup(true)}
        >
          Sign up here
        </button>
      </p>
    </div>
  );
}

export default Login;
