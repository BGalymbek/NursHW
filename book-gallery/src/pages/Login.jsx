import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setIsAuthenticated }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@") || password.length < 4) {
      setError("Invalid email or password");
      return;
    }
    setIsAuthenticated(true);
    navigate("/home");
  };

  return (
    <div className="login-page">
        <div className="login-container">
            <div className="login-header">
            <h2>Welcome Back</h2>
            <p>Login to your BookShelf account</p>
            </div>
            
            {error && <div className="error-message">{error}</div>}
            
            <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
                <label>Email</label>
                <input
                type="email"
                placeholder="your@email.com"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            
            <div className="form-group">
                <label>Password</label>
                <input
                type="password"
                placeholder="••••••••"
                className="form-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            
            <button className="login-button">Login</button>
            </form>
        </div>
    </div>
  );
}
