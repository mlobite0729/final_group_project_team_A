import Head from 'next/head';
import Link from 'next/link';
/*import styles from '../styles/Home.module.css';*/
import React from 'react';

const Home = () => {
  return (
    <div>
      <header>
        <img src="images/Apex_Athletics_logo.png" alt="Logo" className="logo" />
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/brand_guide">Brand Guide</Link></li>
            <li><Link href="/marketing_strategy">Marketing Strategy</Link></li>
            <li><Link href="/buyers_persona">Buyer's Persona</Link></li>
            <li><Link href="/privacy_policy">Privacy Policy</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </nav>
      </header>

      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-heading">Welcome to Apex Athletics Gym</h1>
          <p className="hero-subheading">Unlock your full athletic potential</p>
          <button className="hero-button">Get Started</button>
        </div>
      </div>

      <iframe
        width="100%"
        height="600"
        src="https://www.youtube.com/embed/l8QR-jfv8Os"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <div className="about">
        <div className="container">
          <h2>About Us</h2>
          <p>
            Apex Athletics Gym is a state-of-the-art fitness facility dedicated to helping individuals achieve their fitness goals. With a team of experienced trainers and a wide range of equipment, we provide a supportive environment for all fitness levels.
          </p>
        </div>
      </div>
      
      

      <div className="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="service">
            <h3>Personal Training</h3>
            <p>Our certified personal trainers will create a customized workout plan tailored to your specific needs and help you reach your fitness goals faster.</p>
          </div>
          <div className="service">
            <h3>Group Classes</h3>
            <p>Join our high-energy group classes led by experienced instructors. From cardio and strength training to yoga and pilates, we offer a variety of classes to keep you motivated.</p>
          </div>
          <div className="service">
            <h3>Nutrition Guidance</h3>
            <p>Our nutrition experts will provide guidance on healthy eating habits and create personalized meal plans to complement your fitness routine.</p>
          </div>
        </div>
      </div>

      <div className="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <p>Ready to take the next step in your fitness journey? Contact us today to schedule a consultation or ask any questions you may have.</p>
          <button className="contact-button">Get in Touch</button>
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>company</h4>
              <ul>
                <li><a href="/">home</a></li>
                <li><a href="/buyers_persona">Buyer's Persona</a></li>
                <li><a href="/marketing_strategy">Marketing Strategy</a></li>
                <li><a href="/brand_guide">Brand Guide</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>get help</h4>
              <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">shipping</a></li>
                <li><a href="#">returns</a></li>
                <li><a href="#">order status</a></li>
                <li><a href="#">payment options</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>online shop</h4>
              <ul>
                <li><a href="#">Apparel</a></li>
                <li><a href="#">Bag</a></li>
                <li><a href="#">Shoes</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
