import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <div>
      <header>
        <img src="" alt="Logo" className="logo" />
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

      <section className="about-section">
        <h1>About Apex Athletics Gym</h1>
        <p>Welcome to Apex Athletics Gym, your ultimate fitness destination!</p>
        <p>We specialize in providing a wide range of fitness services to help you achieve your health and wellness goals. Whether you're looking for invigorating group classes, personalized training sessions, or expert nutrition guidance, we've got you covered.</p>
        <p>At Apex Athletics, we believe in the power of transformation. Our brand archetype is the Hero, and our tagline "Achievement and Risk" reflects our commitment to helping you overcome challenges and achieve your full potential.</p>
        <p>Our dedicated team of experienced trainers is here to guide you every step of the way. We offer a variety of group classes including yoga and cycling, designed to challenge and motivate you. If you're looking for a more personalized approach, our certified personal trainers will create tailored workout plans to suit your unique goals.</p>
        <p>Nutrition is a crucial part of any fitness journey, and our nutrition experts are here to provide you with guidance and personalized meal plans that complement your workout routine. We believe in a holistic approach to fitness that encompasses both physical training and nourishment.</p>
        <p>Join us at Apex Athletics Gym and embark on a transformative fitness journey. Our mission is to empower you to push your limits, embrace change, and achieve greatness. We're here to support you as you overcome obstacles and celebrate your successes.</p>
      </section>

      <footer className="footer">
      <div class="container">
         <div class="row">
           <div class="footer-col">
             <h4>company</h4>
             <ul>
               <li><a href="index.html">home</a></li>
               <li><a href="buyers_persona.html">Buyer's Persona</a></li>
               <li><a href="marketing_strategy.html">Marketing Strategy</a></li>
               <li><a href="brand_guide.html">Brand Guide</a></li>
             </ul>
           </div>
           <div class="footer-col">
             <h4>get help</h4>
             <ul>
               <li><a href="#">FAQ</a></li>
               <li><a href="#">shipping</a></li>
               <li><a href="#">returns</a></li>
               <li><a href="#">order status</a></li>
               <li><a href="#">payment options</a></li>
             </ul>
           </div>
           <div class="footer-col">
             <h4>online shop</h4>
             <ul>
               <li><a href="#">Apparel</a></li>
               <li><a href="#">Bag</a></li>
               <li><a href="#">Shoes</a></li>
             </ul>
           </div>
           <div class="footer-col">
             <h4>follow us</h4>
             <div class="social-links">
               <a href="#"><i class="fab fa-facebook-f"></i></a>
               <a href="#"><i class="fab fa-twitter"></i></a>
               <a href="#"><i class="fab fa-instagram"></i></a>
               <a href="#"><i class="fab fa-linkedin-in"></i></a>
             </div>
           </div>
         </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
