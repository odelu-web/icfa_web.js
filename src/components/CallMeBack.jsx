import { useState } from "react";

const CallMeBack = () => {
  const initialState = {
    txtName: "",
    txtMobile: "",
    lauthorisecheck: false,
  };

  const [formData, setFormData] = useState(initialState);

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const mobileRegex = /^[0-9]{10}$/;

    let error = {};

    if (!formData.txtName.trim()) {
      error = { txtName: "Name is required" };
    } else if (!mobileRegex.test(formData.txtMobile)) {
      error = { txtMobile: "Valid 10-digit mobile number is required" };
    } else if (!formData.lauthorisecheck) {
      error = { lauthorisecheck: "You must accept the terms" };
    }
    setErrors(error);

    if (Object.keys(error).length > 0) {
      // Clear error after 5 seconds
      setTimeout(() => {
        setErrors({});
      }, 3000);
      return false;
    }

    return true;
  };

  const handleSubmitNow = (e) => {
    e.preventDefault();

    if (validate()) {
      console.log("Form submitted:", formData);
      setSubmitted(true);
      setFormData(initialState);
      setErrors({});
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <form onSubmit={handleSubmitNow} className="rounded">
      <input name="source" type="hidden" value="IFHE-ODL" />

      <div className="row">
        <div className="col-md-6">
          <p>Let us help you guide towards your career path</p>
          <ul className="callMeList">
            <li>Non-biased career guidance</li>
            <li>Counselling based on your skills and preference</li>
            <li>No repetitive calls, only as per convenience</li>
          </ul>
          <p>We will give you a call between 9:30 AM to 6 PM.</p>
        </div>
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="txtName">Name</label>
            <input
              type="text"
              name="txtName"
              placeholder="Name"
              value={formData.txtName}
              onChange={handleChange}
              className="form-control"
            />
            {errors.txtName && (
              <div className="text-danger small">{errors.txtName}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="txtMobile">Mobile</label>
            <input
              type="text"
              name="txtMobile"
              placeholder="Mobile"
              maxLength={10}
              value={formData.txtMobile}
              onChange={handleChange}
              className="form-control"
            />
            {errors.txtMobile && (
              <div className="text-danger small">{errors.txtMobile}</div>
            )}
          </div>
          <div className="form-check mb-3">
            <input
              type="checkbox"
              name="lauthorisecheck"
              checked={formData.lauthorisecheck}
              onChange={handleChange}
              className="form-check-input"
              id="authorizeCheck"
            />
            <label className="form-check-label" htmlFor="authorizeCheck">
              <small>
                I read the Terms and Conditions and accept the Privacy Policy
                and authorize IFHE to contact me via email, SMS, WhatsApp, and
                voice call.
              </small>
            </label>
            {errors.lauthorisecheck && (
              <div className="text-danger small">{errors.lauthorisecheck}</div>
            )}
          </div>
          <button type="submit" className="btn btn-danger w-100">
            Submit
          </button>

          {submitted && (
            <div className="alert alert-success mt-3" role="alert">
              Form submitted successfully!
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

export default CallMeBack;
