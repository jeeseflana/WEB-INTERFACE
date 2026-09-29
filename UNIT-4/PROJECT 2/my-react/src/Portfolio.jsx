import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./Portfolio.css";
 
/* ---------------- HOME ---------------- */
function Home() {
  return (
    <div className="page">
      <h1>Hi, I'm Flana 👋</h1>
 
      <h2 className="highlight">B.E.CSE Student</h2>
 
      <p>
        Welcome to my personal portfolio. I am interested in
        web development and AI.
      </p>
 
      <Link to="/about" className="button">
        Know More →
      </Link>
    </div>
  );
}
 
/* ---------------- ABOUT ---------------- */
function About() {
  return (
    <div className="page">
      <h1>About Me</h1>
 
      <p>
        I am a II Year B.E.CSE.
        I enjoy learning programming, web development,
        and cyber security concepts.
      </p>
 
      <div className="info">
        <p><strong>Name:</strong> Flana</p>
        <p><strong>Department:</strong> B.E.CSE</p>
        <p><strong>Year:</strong> II Year</p>
        <p><strong>Skills:</strong> Java, Python, React, HTML, CSS</p>
      </div>
    </div>
  );
}
 
/* ---------------- CONTACT ---------------- */
function Contact() {
  return (
    <div className="page">
      <h1>Contact Me</h1>
 
      <div className="contact-box">
        <p>📧 Email: jeese.flana@example.com</p>
        <p>📱 Phone: +91 8072170874</p>
        <p>📍 Location: Tamil Nadu, India</p>
      </div>
 
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
 
        <button type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}
 
/* ---------------- MAIN ---------------- */
function Portfolio() {
  return (
    <BrowserRouter>
 
      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">My Portfolio</h2>
 
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
 
      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
 
    </BrowserRouter>
  );
}
 
export default Portfolio;