import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/Home.module.css';

const BrandGuide = () => {
  const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center horizontally
    justifyContent: 'center', // Center vertically
    minHeight: '100vh', // Ensure the content takes the full viewport height
    padding: '20px',
    backgroundColor: '#1197A9',
    fontSize: 18,
  };

  const contentStyle = {
    maxWidth: '800px',
    textAlign: 'center',
    color: 'black', // Text color set to red
  };
  
  const listItemStyle = {
    marginBottom: '10px', // Add some spacing between list items
  };

  const listStyle = {
    margin: 0, // Remove default margin
    padding: 0, // Remove default padding
    listStyleType: 'none', // Remove bullet points
    textAlign: 'center', // Align list items to the left
  };
  
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Apex Athletics Brand Guide</title>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
        />
        <style>
          {`
            body {
              background-color: #1197A9;
            }
          `}
        </style>
      </Head> 
      <header>
        <img src="/images/Apex_Athletics_logo.png" alt="Logo" className={styles.logo} />
        <nav>
          <ul className={styles.nav_ul}>
            <li className={styles.nav_ul_li}><Link className={styles.nav_ul_li_a} href="/">Home</Link></li>
            <li className={styles.nav_ul_li}><Link className={styles.nav_ul_li_a} href="/brand_guide">Brand Guide</Link></li>
            <li className={styles.nav_ul_li}><Link className={styles.nav_ul_li_a} href="/marketing_strategy">Marketing Strategy</Link></li>
            <li className={styles.nav_ul_li}><Link className={styles.nav_ul_li_a} href="/buyers_persona">Buyer's Persona</Link></li>
            <li className={styles.nav_ul_li}><Link className={styles.nav_ul_li_a} href="/privacy_policy">Privacy Policy</Link></li>
            <li className={styles.nav_ul_li}><Link className={styles.nav_ul_li_a} href="/about">About</Link></li>
            <li className={styles.nav_ul_li}><Link className={styles.nav_ul_li_a} href="/blog">Blog</Link></li>
          </ul>
        </nav>
      </header>
  <div style={pageStyle}>
    <div style={contentStyle}>
      <h1>Archetype: The Hero</h1>
      <p>Helps individuals transform their lives, overcome challenges, and achieve their goals</p>
      <h2>Achievement &amp; Risk</h2>
      <p>Promise of Triumph (brave, determined, capable)</p>
      <h3>Messages:</h3>
      <ul style={listStyle}>
          <li style={listItemStyle}>Embody courage and resilience as you face adversity head-on, emerging stronger than ever.</li>
          <li style={listItemStyle}>Unlock your full potential and embark on a transformative fitness journey with us!</li>
          <li style={listItemStyle}>Ditch the excuses, step out of your comfort zone, and let us guide you towards a healthier, stronger version of yourself.</li>
          <li style={listItemStyle}>Your body is capable of amazing things. Let us help you tap into your inner strength and achieve the goals you've always dreamed of.</li>
          <li style={listItemStyle}>Invest in yourself today and reap the rewards of improved confidence, boosted energy levels, and a revitalized mind.</li>
          <li style={listItemStyle}>Break free from the monotony of your daily routine and discover a world of fitness possibilities that will inspire and empower you.</li>
          <li style={listItemStyle}>Leave behind the stress and worries of the outside world as you step into our welcoming space, dedicated to your well-being.</li>
          <li style={listItemStyle}>Commit to your fitness goals and witness the incredible transformations that await you. Your journey starts here.</li>
        </ul>

      <h3>Shorter Messages:</h3>
      <ul style={listStyle}>
          <li style={listItemStyle}>Ignite your potential. Join our gym today!</li>
          <li style={listItemStyle}>No more excuses. Get fit with us!</li>
          <li style={listItemStyle}>Stronger together. Join our supportive community.</li>
          <li style={listItemStyle}>Unleash your inner strength. Join now!</li>
          <li style={listItemStyle}>Feel the rush. Experience our energizing workouts.</li>
          <li style={listItemStyle}>Escape the ordinary. Discover fitness freedom.</li>
          <li style={listItemStyle}>Transform your life. Start your fitness journey today!</li>
      </ul>
      <h3>Incorporates elements representing personal growth, determination, and achievement</h3>
      <ul style={listStyle}>
          <li style={listItemStyle}>Silhouette of a person in a dynamic pose or abstract symbol</li>
      </ul>

      <h3>Tagline</h3>
      <ul style={listStyle}>
          <li style={listItemStyle}>Unleash Your Potential</li>
          <li style={listItemStyle}>Transform Your Journey</li>
        </ul>

        <h3>Fonts</h3>
        <ul style={listStyle}>
          <li style={listItemStyle}>Montserrat</li>
          <li style={listItemStyle}>Roboto</li>
          <li style={listItemStyle}>Bebas Neue</li>
        </ul>

        <h3>Colors</h3>
        <h4>Primary colors</h4>
        <ul style={listStyle}>
          <li style={listItemStyle}>Electric blue, vibrant orange, energetic red</li>
          <li style={listItemStyle}>Bebas Neue</li>
        </ul>

        <h4>Secondary Colors</h4>
        <ul style={listStyle}>
          <li style={listItemStyle}>Charcoal gray</li>
          <li style={listItemStyle}>White</li>
          <li style={listItemStyle}>Light Shades of Primary Colors</li>
        </ul>

        <h3>Imagery</h3>
        <ul style={listStyle}>
          <li style={listItemStyle}>Photos of individuals engaged in fitness activities</li>
        </ul>

        <h3>Typography</h3>

        <h4>Headings</h4>
        <ul style={listStyle}>
          <li style={listItemStyle}>Oswald</li>
          <li style={listItemStyle}>Impact</li>
          <li style={listItemStyle}>Anton</li>
        </ul>

        <h4>Body Text</h4>
        <ul style={listStyle}>
          <li style={listItemStyle}>Open Sans</li>
          <li style={listItemStyle}>Lato</li>
          <li style={listItemStyle}>Roboto</li>
        </ul>

        <h3>Vocabulary and Tone</h3>
        <ul style={listStyle}>
          <li style={listItemStyle}>Empowering and Motivational language</li>
        </ul>

        <h3>Website Designs</h3>
        <ul style={listStyle}>
          <li style={listItemStyle}>Layout</li>
          <li style={listItemStyle}>Calls to Action</li>
          <li style={listItemStyle}>Testimonials and Reviews</li>
        </ul>
    </div>
  </div>

      

      <footer className={styles.footer}>
        <div className={styles.container_footer}>
          <div className={styles.row}>
            <div className={styles.footer_col}>
              <h4>company</h4>
              <ul>
                <li><a href="/">home</a></li>
                <li><a href="/buyers_persona">Buyer's Persona</a></li>
                <li><a href="/marketing_strategy">Marketing Strategy</a></li>
                <li><a href="/brand_guide">Brand Guide</a></li>
              </ul>
            </div>
            <div className={styles.footer_col}>
              <h4>get help</h4>
              <ul>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">shipping</a></li>
                <li><a href="#">returns</a></li>
                <li><a href="#">order status</a></li>
                <li><a href="#">payment options</a></li>
              </ul>
            </div>
            <div className={styles.footer_col}>
              <h4>online shop</h4>
              <ul>
                <li><a href="#">Apparel</a></li>
                <li><a href="#">Bag</a></li>
                <li><a href="#">Shoes</a></li>
              </ul>
            </div>
            <div className={styles.footer_col}>
              <h4>follow us</h4>
              <div className={styles.social_links}>
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
