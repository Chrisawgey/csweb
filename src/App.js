// src/App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">CS Club</div>
        <div className="links">
          <a href="#home">Home</a>
          <a href="#events">Events</a>
          <a href="#projects">Projects</a>
          <a href="#members">Members</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="section">
        <h1>Welcome to the Computer Science Club</h1>
        <p>Discover, learn, and build with us!</p>
      </section>

      {/* Events Section */}
      <section id="events" className="section">
        <h2>Upcoming Events</h2>
        <div className="card">Event 1: Intro to AI</div>
        <div className="card">Event 2: Hackathon</div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2>Our Projects</h2>
        <div className="card">Project 1: AI Lip Reading</div>
        <div className="card">Project 2: Real-time Sports Analysis</div>
      </section>

      {/* Members Section */}
      <section id="members" className="section">
        <h2>Meet Our Team</h2>
        <div className="card">Member 1: Alex - President</div>
        <div className="card">Member 2: Taylor - Vice President</div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="section">
        <p>© 2023 Computer Science Club. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
