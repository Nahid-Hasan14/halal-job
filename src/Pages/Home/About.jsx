import React from "react";
import "./About.css";
export default function About() {
  return (
    <>
      <div className="container">
        <section className="about-section">
          <h2>About Us</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Welcome to our job portal! We are dedicated to connecting
                talented individuals with exciting opportunities. Our mission is
                to make the job search process efficient and enjoyable. Whether
                you are a job seeker or an employer, we are here to help you
                succeed.
              </p>
            </div>
            <div className="about-image">
              <img src="company-image.jpg" alt="Company Image" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
