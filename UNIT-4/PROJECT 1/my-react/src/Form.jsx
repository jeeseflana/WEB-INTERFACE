import React, { useState } from "react";
import "./Form.css";
function Form() {
  const [form, setForm] = useState({
    username: "",
    aadhaar: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    photo: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === "photo") {
      setForm({ ...form, photo: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const validate = () => {
    if (form.username !== form.aadhaar) {
      alert("Username and Aadhaar Name must be same");
      return false;
    }

    if (form.phone.length !== 10 || isNaN(form.phone)) {
      alert("Phone must be 10 digits");
      return false;
    }

    if (!form.email.includes("@")) {
      alert("Invalid email");
      return false;
    }

    if (form.password.length < 6) {
      alert("Password must be at least 6 characters");
      return false;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Form Submitted Successfully");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" placeholder="Username" onChange={handleChange} required />
      <input name="aadhaar" placeholder="Aadhaar Name" onChange={handleChange} required />
      <input name="email" placeholder="Email" onChange={handleChange} required />
      <input name="phone" placeholder="Phone" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required />
      <input type="file" name="photo" onChange={handleChange} />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;