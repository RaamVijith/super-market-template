import React from 'react';
import './Footer.css';
import logo from '../../assets/imgs/m-logo.png';
import appStore from '../../assets/imgs/app-stor.png';
import googlePlay from '../../assets/imgs/google-play.png';
import payment from '../../assets/imgs/payment2.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column logo-column">
          <img src={logo} alt="Your Logo" />
          <p>QUESTION OR FEEDBACK?</p>
          <p><i className="fas fa-phone"></i> +1 234 5678</p>
          <p><i className="fas fa-envelope"></i> mail@mail.com</p>
          <div className="app-download">
            <img src={appStore} alt="App Store" />
            <img src={googlePlay} alt="Google Play" />
          </div>
        </div>
        <div className="footer-column">
          <h3>COMPANY</h3>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Media</a></li>
            <li><a href="#">Get in Touch</a></li>
            <li><a href="#">Customer Stories</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>SHOP</h3>
          <ul>
            <li><a href="#">Women</a></li>
            <li><a href="#">Men</a></li>
            <li><a href="#">Shoes</a></li>
            <li><a href="#">Bags & Accessories</a></li>
            <li><a href="#">Top Brands</a></li>
            <li><a href="#">Sale & Special Offers</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>POLICIES</h3>
          <ul>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Return & Refund</a></li>
            <li><a href="#">Payment Policy</a></li>
            <li><a href="#">Grievance Cell</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Copyrights All rights reserved. Powered by <a href="#">xCommerz™</a></p>
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>
        <div className="payment-methods">
          <img src={payment} alt="Visa" />
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;
