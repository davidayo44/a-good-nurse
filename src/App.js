import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header style={{ backgroundColor: "#007bff", color: "white", padding: "20px" }}>
        <h1>A GOOD NURSE</h1>
        <nav>
          <a href="#about" style={{ margin: "0 10px", color: "white" }}>About</a>
          <a href="#resources" style={{ margin: "0 10px", color: "white" }}>Resources</a>
          <a href="#join" style={{ margin: "0 10px", color: "white" }}>Join</a>
          <a href="#contact" style={{ margin: "0 10px", color: "white" }}>Contact</a>
        </nav>
      </header>

      <section style={{ padding: "40px", backgroundColor: "#f5f5f5" }}>
        <h2>Welcome to A GOOD NURSE</h2>
        <p>Empowering nurses around the world with knowledge and community.</p>
        <button style={{ padding: "10px 20px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "5px" }}>
          Join Us Now
        </button>
      </section>

      <section id="about" style={{ padding: "40px" }}>
        <h3>About Us</h3>
        <p>A GOOD NURSE is a global platform created by nurses for nurses. We aim to support, educate, and connect nurses through free knowledge-sharing.</p>
      </section>

      <section id="resources" style={{ padding: "40px", backgroundColor: "#f5f5f5" }}>
        <h3>Resources</h3>
        <p>Download guides, read tips, and access articles that help you grow as a nurse.</p>
      </section>

      <section id="join" style={{ padding: "40px" }}>
        <h3>Join Our Community</h3>
        <form>
          <input type="text" placeholder="Full Name" style={{ display: "block", margin: "10px 0", padding: "8px", width: "100%" }} />
          <input type="email" placeholder="Email Address" style={{ display: "block", margin: "10px 0", padding: "8px", width: "100%" }} />
          <button type="submit" style={{ padding: "10px 20px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "5px" }}>
            Register
          </button>
        </form>
      </section>

      <section id="contact" style={{ padding: "40px", backgroundColor: "#f5f5f5" }}>
        <h3>Contact Us</h3>
        <p>Email: support@agoodnurse.com</p>
      </section>

      <footer style={{ backgroundColor: "#007bff", color: "white", textAlign: "center", padding: "10px" }}>
        &copy; 2025 A GOOD NURSE. All rights reserved.
      </footer>
    </div>
  );
}

export default App;