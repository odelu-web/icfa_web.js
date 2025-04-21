import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BbaContactForm = () => {
  const [formData, setFormData] = useState({
    txtName: "",
    txtEmail: "",
    txtMobile: "",
    llocation: "",

    lauthorisecheck: false,
    captchaInput: "",
  });

  const [captcha, setCaptcha] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    const newCaptcha = Math.floor(10000 + Math.random() * 90000).toString();
    setCaptcha(newCaptcha);
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.txtName.trim()) newErrors.txtName = "Name is required.";
    if (!formData.txtEmail.trim()) {
      newErrors.txtEmail = "Email is required.";
    } else if (!emailRegex.test(formData.txtEmail)) {
      newErrors.txtEmail = "Invalid email format.";
    }
    if (!formData.txtMobile.trim()) {
      newErrors.txtMobile = "Mobile is required.";
    } else if (!/^\d{10}$/.test(formData.txtMobile)) {
      newErrors.txtMobile = "Mobile must be 10 digits.";
    }
    if (!formData.llocation.trim())
      newErrors.llocation = "Location is required.";

    if (!formData.lauthorisecheck)
      newErrors.lauthorisecheck = "You must agree before submitting.";
    if (formData.captchaInput !== captcha)
      newErrors.captchaInput = "Captcha does not match.";

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    try {
      const payload = {
        Name: formData.txtName,
        Email: formData.txtEmail,
        Mobile: formData.txtMobile,
        Location: formData.llocation,

        Captcha: formData.captchaInput,
      };

      await axios.post("http://localhost:5002/auth/contactform", payload);

      setFormData({
        txtName: "",
        txtEmail: "",
        txtMobile: "",
        llocation: "",

        lauthorisecheck: false,
        captchaInput: "",
      });
      setErrors({});
      generateCaptcha();

      //navigate("/thankyou");
      window.open("/thankyou", "_blank");
    } catch (err) {
      console.error("Submission failed", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-1">
        <input
          type="text"
          name="txtName"
          value={formData.txtName}
          onChange={handleChange}
          className="form-control"
          placeholder="Name"
        />
        {errors.txtName && <div className="text-danger">{errors.txtName}</div>}
      </div>

      <div className="mb-1">
        <input
          type="email"
          name="txtEmail"
          value={formData.txtEmail}
          onChange={handleChange}
          className="form-control"
          placeholder="Email"
        />
        {errors.txtEmail && (
          <div className="text-danger">{errors.txtEmail}</div>
        )}
      </div>

      <div className="mb-1">
        <input
          type="text"
          name="txtMobile"
          value={formData.txtMobile}
          onChange={handleChange}
          className="form-control"
          placeholder="Mobile"
        />
        {errors.txtMobile && (
          <div className="text-danger">{errors.txtMobile}</div>
        )}
      </div>

      <div className="mb-1">
        <input
          type="text"
          name="llocation"
          value={formData.llocation}
          onChange={handleChange}
          className="form-control"
          placeholder="Location"
        />
        {errors.llocation && (
          <div className="text-danger">{errors.llocation}</div>
        )}
      </div>

      <div className="mb-3 form-check">
        <input
          type="checkbox"
          name="lauthorisecheck"
          checked={formData.lauthorisecheck}
          onChange={handleChange}
          className="form-check-input"
        />
        <label className="form-check-label small">
          I read the Terms and Conditions and accept the Privacy Policy and
          authorise IFHE to contact me with updates & notifications via email,
          SMS, WhatsApp, and voice call.
        </label>
        {errors.lauthorisecheck && (
          <div className="text-danger">{errors.lauthorisecheck}</div>
        )}
      </div>

      <div className="mb-1">
        <div className="d-flex align-items-center gap-2">
          <div
            className="p-0 bg-light border rounded"
            style={{
              fontWeight: "bold",
              fontSize: "1.25rem",
              letterSpacing: "4px",
              userSelect: "none",
              minWidth: "100px",
              textAlign: "center",
            }}
          >
            {captcha}
          </div>
          <button
            type="button"
            className="btn btn-outline-secondary btn-sm border-0"
            onClick={generateCaptcha}
          >
            🔄
          </button>
          <input
            type="text"
            name="captchaInput"
            value={formData.captchaInput}
            onChange={handleChange}
            className="form-control mt-2"
            placeholder="Enter Captcha"
          />
        </div>
        {errors.captchaInput && (
          <div className="text-danger">{errors.captchaInput}</div>
        )}
      </div>

      <button type="submit" className="btn btn-danger w-100">
        Submit
      </button>
    </form>
  );
};

export default BbaContactForm;
