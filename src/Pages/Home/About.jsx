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
                succeed. Lorem ipsum dolor sit, amet consectetur adipisicing
                elit. Tenetur rem cumque neque nihil voluptate molestiae
                accusantium quisquam sed, hic aspernatur repellendus nemo
                molestias eos recusandae. Quisquam fugit ipsum cumque nostrum et
                repudiandae, soluta error dolorum voluptatem eveniet mollitia
                tempora ducimus, nobis vitae explicabo asperiores eos sapiente
                accusantium ex quo. Sunt.
              </p>
            </div>
            <div className="about-image">
              <img
                src="https://i.postimg.cc/1tS3FFBZ/male-worker-with-notepad-office-23-2147656770.jpg"
                alt="Company Image"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
