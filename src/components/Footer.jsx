/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <span className="logo">Bhatti.</span>
        <div className="links">
          <a href="https://www.facebook.com/muhammad.ateeb.31105?mibextid=ZbWKwL">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.linkedin.com/in/muhammad-ateeb-5b084221a">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/Muhamma33590546?t=7KJ3lej91sIEXzwbCbQtFg&s=09">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <p className="copyright">
          <i className="fas fa-heart"></i>
          Created By Muhammad Ateeb
        </p>
      </div>
    </footer>
  );
}

export default Footer;
