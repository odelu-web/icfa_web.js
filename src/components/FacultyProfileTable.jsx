import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const FacultyProfileList = () => {
  const [facultyProfiles, setFacultyProfiles] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const fetchFacultyProfiles = async () => {
    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        setError("Unauthorized access. Please login.");
        return;
      }

      const response = await axios.get(
        "http://localhost:5002/auth/facultyprofiles",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setFacultyProfiles(response.data);
    } catch (err) {
      setError("Error fetching faculty profiles");
      console.error("Error:", err.response?.data || err.message);
    }
  };

  useEffect(() => {
    fetchFacultyProfiles();
  }, []);

  const handleDelete = async (facultyId) => {
    if (!window.confirm("Are you sure you want to delete this profile?"))
      return;

    try {
      const token = localStorage.getItem("authToken");
      if (!token) {
        alert("No token found, please log in again.");
        return;
      }

      const response = await axios.delete(
        `http://localhost:5002/auth/facultyprofiles/${facultyId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.status === 200) {
        alert("Profile deleted successfully.");
        fetchFacultyProfiles();
      }
    } catch (err) {
      setError("Error deleting faculty profile");
      console.error("Error:", err.response?.data || err.message);
    }
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4>Faculty Profiles List</h4>

                  <div className="d-flex align-content-end justify-content-end mb-3">
                    <button
                      type="button"
                      className="btn btn-secondary me-3"
                      onClick={() => navigate("/dashboard/")}
                    >
                      Back to Dashboard
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() => navigate("/dashboard/facultyprofileform")}
                    >
                      Create New Profile
                    </button>
                  </div>
                </div>

                {error && <div className="alert alert-danger">{error}</div>}

                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Category</th>
                      <th>Name</th>
                      <th>Designation</th>
                      <th>Teaching Area</th>
                      <th>Research</th>
                      <th>Recognition</th>
                      <th>IMg</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {facultyProfiles.map((profile) => (
                      <tr key={profile.FacultyId}>
                        <td>{profile.typecategory}</td>
                        <td>{profile.facultyname}</td>
                        <td>{profile.designation}</td>
                        <td>{profile.teaching}</td>
                        <td>{profile.research}</td>
                        <td>{profile.recognition}</td>
                        <td>{profile.facultyImg}</td>
                        <td>
                          <Link
                            to={`/dashboard/editfacultyprofile/${profile.FacultyId}`}
                            className="btn btn-sm btn-warning me-2"
                          >
                            Edit
                          </Link>
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => handleDelete(profile.FacultyId)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultyProfileList;
