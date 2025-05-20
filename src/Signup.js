


// import React, { useState } from "react";
// function Signup({ setUser, setIsLogin, setIsSignup }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignup = () => {
//     const allUsers = JSON.parse(localStorage.getItem("users")) || {};
//     if (allUsers[username]) {
//       alert("User already exists");
//     } else {
//       const newUser = { username, password, liked: [], disliked: [] };
//       allUsers[username] = newUser;
//       localStorage.setItem("users", JSON.stringify(allUsers));
//       setUser(newUser);
//       setIsLogin(true);
//       setIsSignup(false);
//     }
//   };
//   return (
//     <div>
//       <h2>Signup</h2>
//       <input
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         placeholder="Password"
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button onClick={handleSignup}>Sign Up</button>
//       <p>
//         Already have an account?{" "}
//         <button onClick={() => setIsSignup(false)}>Login here</button>
//       </p>
//     </div>
//   );
// }
// export default Signup;

// import React, { useState } from "react";
// import "./Signup.css";

// function Signup({ setUser, setIsLogin, setIsSignup }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignup = () => {
//     const trimmedUsername = username.trim();

//     if (!trimmedUsername || !password) {
//       alert("Please enter both username and password");
//       return;
//     }

//     const allUsers = JSON.parse(localStorage.getItem("users")) || {};

//     if (allUsers[trimmedUsername]) {
//       alert("User already exists");
//     } else {
//       const newUser = { username: trimmedUsername, password, liked: [], disliked: [] };
//       allUsers[trimmedUsername] = newUser;
//       localStorage.setItem("users", JSON.stringify(allUsers));
//       setUser(newUser);
//       setIsLogin(true);
//       setIsSignup(false);
//       setUsername("");
//       setPassword("");
//     }
//   };

//   return (
//     <div className="signup-container">
//       <h2 className="signup-heading">Signup</h2>
//       <input
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//         className="signup-input"
//       />
//       <input
//         placeholder="Password"
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         className="signup-input"
//       />
//       <button
//         onClick={handleSignup}
//         disabled={!username.trim() || !password}
//         className="signup-button"
//       >
//         Sign Up
//       </button>
//       <p className="signup-paragraph">
//         Already have an account?{" "}
//         <button onClick={() => setIsSignup(false)} className="signup-link-button">
//           Login here
//         </button>
//       </p>
//     </div>
//   );
// }

// export default Signup;


import React, { useState } from "react";
import "./Signup.css";

function Signup({ setUser, setIsLogin, setIsSignup }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    const trimmedUsername = username.trim();

    if (!trimmedUsername || !password) {
      alert("Please enter both username and password");
      return;
    }

    const allUsers = JSON.parse(localStorage.getItem("users")) || {};

    if (allUsers[trimmedUsername]) {
      alert("User already exists");
    } else {
      const newUser = {
        username: trimmedUsername,
        password,
        liked: [],
        disliked: [],
      };

      allUsers[trimmedUsername] = newUser;
      localStorage.setItem("users", JSON.stringify(allUsers));

      // Clear input fields
      setUsername("");
      setPassword("");

      // Show success message
      alert("Signup successful! Please login.");

      // Redirect to login screen
      setIsSignup(false);
    }
  };

  return (
    <div className="signup-container">
      <h2 className="signup-heading">Signup</h2>
      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="signup-input"
      />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="signup-input"
      />
      <button
        onClick={handleSignup}
        disabled={!username.trim() || !password}
        className="signup-button"
      >
        Sign Up
      </button>
      <p className="signup-paragraph">
        Already have an account?{" "}
        <button
          onClick={() => setIsSignup(false)}
          className="signup-link-button"
        >
          Login here
        </button>
      </p>
    </div>
  );
}

export default Signup;
