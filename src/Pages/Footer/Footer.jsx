import "./Footer.css";

export default function Footer() {
  return (
    <div className="footerbody">
      <div className="footer container">
        <footer className="footer">
          <div className="footer_inner">
            <div className="c-footer">
              <div className="layout">
                <div className="layout_item w-50">
                  <div className="newsletter">
                    <h3 className="newsletter_title">
                      Get updates on fun stuff you probably want to know about
                      in your inbox.
                    </h3>
                  </div>
                </div>

                <div className="layout_item w-25">
                  <nav className="c-nav-tool">
                    <h4 className="c-nav-tool_title">Menu</h4>
                    <ul className="c-nav-tool_list">
                      <li>
                        <a href="/collections/all" className="c-link">
                          Shop All
                        </a>
                      </li>

                      <li>
                        <a href="/pages/about-us" className="c-link">
                          About Us
                        </a>
                      </li>

                      <li>
                        <a href="/blogs/community" className="c-link">
                          Community
                        </a>
                      </li>
                      <li>
                        <a href="#" className="c-link">
                          Vibes
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>

                <div className="layout_item w-25">
                  <nav className="c-nav-tool">
                    <h4 className="c-nav-tool_title">Support</h4>
                    <ul className="c-nav-tool_list">
                      <li className="c-nav-tool_item">
                        <a href="/pages/shipping-returns" className="c-link">
                          Shipping &amp; Returns
                        </a>
                      </li>

                      <li className="c-nav-tool_item">
                        <a href="/pages/help" className="c-link">
                          Help &amp; FAQ
                        </a>
                      </li>

                      <li className="c-nav-tool_item">
                        <a href="/pages/terms-conditions" className="c-link">
                          Terms &amp; Conditions
                        </a>
                      </li>

                      <li className="c-nav-tool_item">
                        <a href="/pages/privacy-policy" className="c-link">
                          Privacy Policy
                        </a>
                      </li>

                      <li className="c-nav-tool_item">
                        <a href="contact" className="c-link">
                          Contact
                        </a>
                      </li>

                      <li className="c-nav-tool_item">
                        <a href="/account/login" className="c-link">
                          Login
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              <p>&copy; Provider Nahid Hasan . 2024</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
