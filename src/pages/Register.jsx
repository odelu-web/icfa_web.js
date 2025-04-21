import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate(); // Using useNavigate from react-router-dom v6

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5002/auth/register",
        values
      );

      if (response.status === 201) {
        //console.log(response); // Logs response data

        // Redirect to login page upon successful registration
        navigate("/loginpage"); // Use navigate for redirection
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className="card border-0 shadow">
              <div className="card-body p-4">
                <h3 className="mb-4 text-center">Register</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-1">
                    <label htmlFor="username">UserName</label>
                    <input
                      type="text"
                      name="username"
                      onChange={handleChanges}
                      placeholder="Enter user name"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="mb-1">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      onChange={handleChanges}
                      placeholder="Enter email id"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="mb-1">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      onChange={handleChanges}
                      placeholder="Enter password"
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="d-flex align-items-center justify-content-center mb-3">
                    <button type="submit" className="btn btn-danger">
                      Register
                    </button>
                  </div>
                </form>
                <div className="d-flex align-items-center justify-content-center">
                  <p>
                    Already have an account?
                    <Link className="ms-3 text-danger" to="/loginpage">
                      Login
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
