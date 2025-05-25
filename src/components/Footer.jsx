function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About Me</h4>
          <p className="textabout">
           A passionate Information Technology student, eager to explore innovative solutions and refine digital experiences.
          </p>
        </div>
        
        <div className="footer-section">
          <h4 className="contact-text">Contact</h4>
          <p className="pip">Email: nylase12@gmail.com</p>
          <p className="pip">Phone: 09692304028</p>
          <p>
            <a href="https://www.facebook.com/margaretteann.estanol" target="_blank" rel="noopener noreferrer" className="ff_cnt">
              Facebook
            </a>{" "}
            |{" "}
            <a href="https://www.instagram.com/margaretteannf/" target="_blank" rel="noopener noreferrer" className="f_cnt">
              Telegram
            </a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Elysalyn Barlan. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;