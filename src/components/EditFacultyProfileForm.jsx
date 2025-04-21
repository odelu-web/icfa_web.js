import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditFacultyProfile = () => {
  // Retrieve the facultyId from the URL params
  const { id } = useParams();
  const navigate = useNavigate();

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

  // Fetch the existing faculty profile data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) return navigate("/loginpage");

      try {
        // Send GET request to fetch faculty profile data
        const res = await axios.get(
          `http://localhost:5002/auth/facultyprofile/${id}`, // Make sure this endpoint matches your backend route
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setFormData(res.data); // Populate form data with existing profile data
      } catch (err) {
        console.error("Fetch error:", err);
        setErrors({ general: "Failed to fetch faculty profile data" });
        navigate("/loginpage");
      }
    };

    fetchData();
  }, [id, navigate]);

  // Handle changes in form input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission (updating the faculty profile)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("authToken");
    if (!token) return navigate("/loginpage");

    try {
      // Send PUT request to update the faculty profile
      await axios.put(
        `http://localhost:5002/auth/facultyprofileform/${id}`, // PUT request to update the profile by facultyId
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setSuccess("Profile updated successfully!");
      navigate("/dashboard/facultyprofilestable"); // Navigate to the faculty profile list page
    } catch (err) {
      console.error("Update error:", err);
      setErrors({ general: "Failed to update profile" });
    }
  };

  return (
    <section className="container mt-4">
      <h4>Update Faculty Profile</h4>

      {/* Display any error or success message */}
      {errors.general && (
        <div className="alert alert-danger">{errors.general}</div>
      )}
      {success && <div className="alert alert-success">{success}</div>}

      <form onSubmit={handleSubmit}>
        {/* Category */}
        <div className="form-group mb-3">
          <label>Category</label>
          <select
            name="typecategory"
            className="form-control"
            value={formData.typecategory}
            onChange={handleChange}
          >
            <option value="">Select Category</option>
            <option value="Prof">Professor</option>
            <option value="Asst Prof">Assistant Professor</option>
            <option value="Assoc Prof">Associate Professor</option>
          </select>
        </div>

        {/* Faculty Name */}
        <div className="form-group mb-3">
          <label>Faculty Name</label>
          <input
            type="text"
            name="facultyname"
            className="form-control"
            value={formData.facultyname}
            onChange={handleChange}
          />
        </div>

        {/* Designation */}
        <div className="form-group mb-3">
          <label>Designation</label>
          <input
            type="text"
            name="designation"
            className="form-control"
            value={formData.designation}
            onChange={handleChange}
          />
        </div>

        {/* Teaching Area */}
        <div className="form-group mb-3">
          <label>Teaching Area</label>
          <input
            type="text"
            name="teaching"
            className="form-control"
            value={formData.teaching}
            onChange={handleChange}
          />
        </div>

        {/* Research Publications */}
        <div className="form-group mb-3">
          <label>Research Publications</label>
          <input
            type="text"
            name="research"
            className="form-control"
            value={formData.research}
            onChange={handleChange}
          />
        </div>

        {/* Recognition */}
        <div className="form-group mb-3">
          <label>Recognition</label>
          <input
            type="text"
            name="recognition"
            className="form-control"
            value={formData.recognition}
            onChange={handleChange}
          />
        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-success">
            Update Profile
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate("/dashboard/facultyprofilestable")} // Navigate back to the list
          >
            Back to List
          </button>
        </div>
      </form>
    </section>
  );
};

export default EditFacultyProfile;
