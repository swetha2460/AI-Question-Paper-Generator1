import { useState } from "react";
import Dashboard from "./Dashboard";
import "./Login.css";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "1234") {
      setLoggedIn(true);
      setError("");
    } else {
      setError("Invalid username or password");
    }
  };

  if (loggedIn) {
    return <Dashboard />;
  }

  return (
    <div className="login-page">

      <div className="login-card">

        <h1>🤖 AI QPG</h1>

        <p>Faculty Login</p>

        <form onSubmit={handleLogin}>

          <label>Username</label>

          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <div className="login-error">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="login-button"
          >
            Login
          </button>

        </form>

        <div className="demo-login">

          <small>Demo Login</small>

          <br />

          Username: <b>admin</b>

          <br />

          Password: <b>1234</b>

        </div>

      </div>

    </div>
  );
}

export default Login;