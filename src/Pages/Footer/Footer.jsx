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

    //{/*
    // <div classNameNameName="footer-main">
    //   <footer classNameNameName="footer container">
    //     <div classNameNameName="footer_inner">
    //       <div classNameNameName="c-footer">
    //         <div classNameNameName="layout">
    //           <div classNameNameName="layout_item w-50">
    //             <div classNameNameName="newsletter">
    //               <h3 classNameNameName="newsletter_title">
    //                 Get updates on fun stuff you probably want to know about in
    //                 your inbox.
    //               </h3>
    //             </div>
    //           </div>

    //           <div classNameNameName="layout_item w-25">
    //             <nav classNameNameName="c-nav-tool">
    //               <h4 classNameNameName="c-nav-tool_title">Menu</h4>
    //               <ul classNameNameName="c-nav-tool_list">
    //                 <li>
    //                   <a href="/collections/all" classNameNameName="c-link">
    //                     Shop All
    //                   </a>
    //                 </li>

    //                 <li>
    //                   <a href="/pages/about-us" classNameNameName="c-link">
    //                     About Us
    //                   </a>
    //                 </li>

    //                 <li>
    //                   <a href="/blogs/community" classNameNameName="c-link">
    //                     Community
    //                   </a>
    //                 </li>
    //                 <li>
    //                   <a href="#" classNameNameName="c-link">
    //                     Vibes
    //                   </a>
    //                 </li>
    //               </ul>
    //             </nav>
    //           </div>

    //           <div classNameNameName="layout_item w-25">
    //             <nav classNameNameName="c-nav-tool">
    //               <h4 classNameNameName="c-nav-tool_title">Support</h4>
    //               <ul classNameNameName="c-nav-tool_list">
    //                 <li classNameNameName="c-nav-tool_item">
    //                   <a href="/pages/shipping-returns" classNameNameName="c-link">
    //                     Shipping &amp; Returns
    //                   </a>
    //                 </li>

    //                 <li classNameNameName="c-nav-tool_item">
    //                   <a href="/pages/help" classNameNameName="c-link">
    //                     Help &amp; FAQ
    //                   </a>
    //                 </li>

    //                 <li classNameNameName="c-nav-tool_item">
    //                   <a href="/pages/terms-conditions" classNameNameName="c-link">
    //                     Terms &amp; Conditions
    //                   </a>
    //                 </li>

    //                 <li classNameNameName="c-nav-tool_item">
    //                   <a href="/pages/privacy-policy" classNameNameName="c-link">
    //                     Privacy Policy
    //                   </a>
    //                 </li>

    //                 <li classNameNameName="c-nav-tool_item">
    //                   <a href="contact" classNameNameName="c-link">
    //                     Contact
    //                   </a>
    //                 </li>

    //                 <li classNameNameName="c-nav-tool_item">
    //                   <a href="/account/login" classNameNameName="c-link">
    //                     Login
    //                   </a>
    //                 </li>
    //               </ul>
    //             </nav>
    //           </div>
    //         </div>

    //         <p>&copy; Provider Nahid Hasan . 2024</p>
    //       </div>
    //     </div>
    //   </footer>
    // </div> */}
  );
}
