import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const BrandGuide = () => {
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

      <section className="main-content">
        <h1>Archetype: The Hero</h1>
        <p>Helps individuals transform their lives, overcome challenges, and achieve their goals</p>
        <h2>Achievement & Risk</h2>
        <p>Promise of Triumph (brave, determined, capable)</p>
      </section>

      <section className="messages">
        <h3>Messages:</h3>
        <ul>
          <li>Embody courage and resilience as you face adversity head-on, emerging stronger than ever.</li>
          <li>Unlock your full potential and embark on a transformative fitness journey with us!</li>
          <li>Ditch the excuses, step out of your comfort zone, and let us guide you towards a healthier, stronger version of yourself.</li>
          <li>Your body is capable of amazing things. Let us help you tap into your inner strength and achieve the goals you've always dreamed of.</li>
          <li>Invest in yourself today and reap the rewards of improved confidence, boosted energy levels, and a revitalized mind.</li>
          <li>Break free from the monotony of your daily routine and discover a world of fitness possibilities that will inspire and empower you.</li>
          <li>Leave behind the stress and worries of the outside world as you step into our welcoming space, dedicated to your well-being.</li>
          <li>Commit to your fitness goals and witness the incredible transformations that await you. Your journey starts here.</li>
        </ul>

        <h3>Shorter Messages:</h3>
        <ul>
          <li>Ignite your potential. Join our gym today!</li>
          <li>No more excuses. Get fit with us!</li>
          <li>Stronger together. Join our supportive community.</li>
          <li>Unleash your inner strength. Join now!</li>
          <li>Feel the rush. Experience our energizing workouts.</li>
          <li>Escape the ordinary. Discover fitness freedom.</li>
          <li>Transform your life. Start your fitness journey today!</li>
        </ul>
      </section>

      <section className="brand-logo">
        <h3>Incorporates elements representing personal growth, determination, and achievement</h3>
        <ul>
          <li>Silhouette of a person in a dynamic pose or abstract symbol</li>
        </ul>

        <h3>Tagline</h3>
        <ul>
          <li>Unleash Your Potential</li>
          <li>Transform Your Journey</li>
        </ul>

        <h3>Fonts</h3>
        <ul>
          <li>Montserrat</li>
          <li>Roboto</li>
          <li>Bebas Neue</li>
        </ul>

        <h3>Colors</h3>
        <h4>Primary colors</h4>
        <ul>
          <li>Electric blue, vibrant orange, energetic red</li>
          <li>Bebas Neue</li>
        </ul>

        <h4>Secondary Colors</h4>
        <ul>
          <li>Charcoal gray</li>
          <li>White</li>
          <li>Light Shades of Primary Colors</li>
        </ul>

        <h3>Imagery</h3>
        <ul>Photos of individuals engaged in fitness activities</ul>

        <h3>Typography</h3>

        <h4>Headings</h4>
        <ul>
          <li>Oswald</li>
          <li>Impact</li>
          <li>Anton</li>
        </ul>

        <h4>Body Text</h4>
        <ul>
          <li>Open Sans</li>
          <li>Lato</li>
          <li>Roboto</li>
        </ul>

        <h3>Vocabulary and Tone</h3>
        <ul>
          <li>Empowering and Motivational language</li>
        </ul>

        <h3>Website Designs</h3>
        <ul>
          <li> Layout </li>
          <li>Calls to Action</li>
          <li> Testimonials and Reviews</li>
        </ul>
      </section>

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

export default BrandGuide;
