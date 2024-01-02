import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footerMain">
      <div className="container">
        <footer className="footer">
          <div className="footer-section contact">
            <h2>Contact Us</h2>
            <p>Email: hasan141894@gmail.com</p>
            <p>Phone: 01774641500</p>
          </div>

          <div className="footer-section links">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-section social">
            <h2>Follow Us</h2>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="reactLogo" />
              </a>

              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitterSquare className="reactLogo" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="reactLogo" />
              </a>
            </div>
          </div>

          <div className="footer-section copyright">
            <p>&copy; 2024 Halal Job Company. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
