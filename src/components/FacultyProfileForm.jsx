// src/pages/dashboard/FacultyProfileForm.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FacultyProfileForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    typecategory: "",
    facultyname: "",
    designation: "",
    teaching: "",
    research: "",
    recognition: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(null);

  const fetchProfileData = async () => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      navigate("/loginpage");
      return;
    }

    try {
      const response = await axios.get(
        `http://localhost:5002/auth/facultyprofile/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setFormData(response.data);
    } catch (err) {
      console.error("Error fetching profile:", err);
      navigate("/loginpage");
    }
  };

  useEffect(() => {
    if (id) {
      fetchProfileData();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    let formErrors = {};
    let isValid = true;

    if (!formData.typecategory) {
      formErrors.typecategory = "Please select a category.";
      isValid = false;
    }
    if (!formData.facultyname) {
      formErrors.facultyname = "Faculty name is required.";
      isValid = false;
    }
    if (!formData.designation) {
      formErrors.designation = "Designation is required.";
      isValid = false;
    }
    if (!formData.teaching) {
      formErrors.teaching = "Teaching area is required.";
      isValid = false;
    }
    if (!formData.research) {
      formErrors.research = "Research publication is required.";
      isValid = false;
    }
    if (!formData.recognition) {
      formErrors.recognition = "Recognition is required.";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const token = localStorage.getItem("authToken");
    if (!token) {
      navigate("/loginpage");
      return;
    }

    try {
      if (id) {
        // Update
        await axios.put(
          `http://localhost:5002/auth/facultyprofile/${id}`,
          formData,
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } else {
        // Create
        await axios.post(
          "http://localhost:5002/auth/facultyprofileform",
          formData,
          { headers: { Authorization: `Bearer ${token}` } }
        );
      }

      setSuccess("Profile saved successfully!");
      setErrors({});
      navigate("/dashboard/facultyprofilestable");
    } catch (error) {
      console.error("Error submitting profile:", error);
      setSuccess(null);
      setErrors({ general: "Error submitting the form." });
    }
  };

  return (
    <section className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5>
                    {id ? "Update Faculty Profile" : "Create Faculty Profile"}
                  </h5>

                  {errors.general && (
                    <div className="alert alert-danger">{errors.general}</div>
                  )}
                  {success && (
                    <div className="alert alert-success">{success}</div>
                  )}
                  <div className="d-flex align-content-end justify-content-end mb-3">
                    <button
                      type="button"
                      className="btn btn-primary me-3"
                      onClick={() => navigate("/dashboard/")}
                    >
                      Back to Dashboard
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() =>
                        navigate("/dashboard/facultyprofilestable")
                      }
                    >
                      Back to List
                    </button>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4">
                    {" "}
                    <div className="form-group mb-3">
                      <label>Category</label>
                      <select
                        name="typecategory"
                        className="form-control"
                        value={formData.typecategory}
                        onChange={handleChange}
                      >
                        <option value="">Select Category</option>
                        <option value="Finance, Economics and Accounting">
                          Finance, Economics and Accounting
                        </option>
                        <option value="Marketing and Strategy">
                          Marketing and Strategy
                        </option>
                        <option value="Operations and IT">
                          Operations and IT
                        </option>
                        <option value="Human Resource and Soft Skills">
                          Human Resource and Soft Skills
                        </option>
                      </select>
                      {errors.typecategory && (
                        <small className="text-danger">
                          {errors.typecategory}
                        </small>
                      )}
                    </div>
                  </div>
                  <div className="col-md-4">
                    {" "}
                    <div className="form-group mb-3">
                      <label>Faculty Name</label>
                      <input
                        type="text"
                        name="facultyname"
                        className="form-control"
                        value={formData.facultyname}
                        onChange={handleChange}
                      />
                      {errors.facultyname && (
                        <small className="text-danger">
                          {errors.facultyname}
                        </small>
                      )}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <label>Designation</label>
                      <input
                        type="text"
                        name="designation"
                        className="form-control"
                        value={formData.designation}
                        onChange={handleChange}
                      />
                      {errors.designation && (
                        <small className="text-danger">
                          {errors.designation}
                        </small>
                      )}
                    </div>
                  </div>
                  <div className="col-md-4">
                    {" "}
                    <div className="form-group mb-3">
                      <label>Teaching Area</label>
                      <input
                        type="text"
                        name="teaching"
                        className="form-control"
                        value={formData.teaching}
                        onChange={handleChange}
                      />
                      {errors.teaching && (
                        <small className="text-danger">{errors.teaching}</small>
                      )}
                    </div>
                  </div>
                  <div className="col-md-4">
                    {" "}
                    <div className="form-group mb-3">
                      <label>Research Publications</label>
                      <input
                        type="text"
                        name="research"
                        className="form-control"
                        value={formData.research}
                        onChange={handleChange}
                      />
                      {errors.research && (
                        <small className="text-danger">{errors.research}</small>
                      )}
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group mb-3">
                      <label>Recognition</label>
                      <input
                        type="text"
                        name="recognition"
                        className="form-control"
                        value={formData.recognition}
                        onChange={handleChange}
                      />
                      {errors.recognition && (
                        <small className="text-danger">
                          {errors.recognition}
                        </small>
                      )}
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-between">
                  <button type="submit" className="btn btn-primary">
                    {id ? "Update Profile" : "Create Profile"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacultyProfileForm;
