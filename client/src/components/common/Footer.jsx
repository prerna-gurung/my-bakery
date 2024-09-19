import linkedin_logo from "../../assets/images/icons/linkedin.svg";
import github_logo from "../../assets/images/icons/github.svg";

import "../../styles/footer.css";
import logo from "../../assets/images/icons/my_logo.png";
function Footer() {
  return (
    <div className="container-fluid px-5 py-1" id="footer">
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 px-5 pt-5">
        <div className="col mb-3">
          <a href="/">
            {" "}
            <img src={logo} alt="my logo" id="my_logo" />
          </a>
          <p className="text-body-secondary">© 2024</p>
        </div>

        <div className="col mb-3"></div>

        <div className="col mb-3">
          <h5>Information</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                About Us
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Contact Us
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Terms of Service
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                FAQs
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Blogs
              </a>
            </li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5>Support</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Delivery Information
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Privacy Policy
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Terms & Conditions
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Refund Policy
              </a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link p-0 text-body-secondary">
                Sitemap
              </a>
            </li>
          </ul>
        </div>

        <div className="col mb-3">
          <h5>Get in Touch</h5>
          <div className="col mb-3">
            <a
              href="mailto:prerna.gurung421@gmail.com"
              className="nav-link p-0 text-body-secondary"
            >
              prerna.gurung421@gmail.com
            </a>
          </div>
          <h5>Follow us</h5>
          <div>
            <a
              href="https://www.linkedin.com/in/prerna-gurung-608a41256/"
              className="social"
            >
              <img
                src={linkedin_logo}
                alt="LinkedIn logo"
                className="social-icon"
              />
            </a>
            <a href="https://github.com/prerna-gurung" className="social">
              <img
                src={github_logo}
                alt="GitHub logo"
                className="social-icon"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
