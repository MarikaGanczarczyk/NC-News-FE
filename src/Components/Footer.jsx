import "./Footer.css";
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Footer() {
  return (
 <footer className="footer">
  <div className="container">
    <div className="footer-wrapper">
      <p>Nc News</p>
    </div>
    <div className="footer-section social">
      <h3>Follow Us</h3>
      <div className="social-icons">
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
      </div>
    </div>
  </div>
</footer>
  );
}

export default Footer;
