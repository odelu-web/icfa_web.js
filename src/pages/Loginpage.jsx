import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Updated import

const Loginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Use navigate instead of useHistory

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5002/auth/loginpage",
        {
          email,
          password,
        }
      );

      // Check for successful login
      if (response.data.token) {
        // Store the token in localStorage
        localStorage.setItem("authToken", response.data.token);

        // Redirect to dashboard or home page after successful login
        navigate("/dashboard"); // Updated navigation method
      }
    } catch (err) {
      setError(err.response ? err.response.data.message : "Login failed");
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4 mx-auto">
          <div className="card border-0 shadow">
            <div className="card-body p-4">
              <h3 className="mb-4 text-center">Login</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-1">
                  <label>Email:</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="mb-1">
                  <label>Password:</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="d-flex align-items-center justify-content-center mb-3">
                  <button type="submit" className="btn btn-danger">
                    Login
                  </button>
                </div>
              </form>
              {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
