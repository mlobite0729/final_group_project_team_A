import Head from 'next/head';
import styles from '../styles/BuyersPersona.module.css';
import Link from 'next/link';
import React from 'react';


const BuyersPersona = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Buyer's Persona</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <img src="/images/Apex_Athletics_logo.png" alt="Logo" className={styles.logo} />
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/brand_guide">Brand Guide</Link>
            </li>
            <li>
              <Link href="/marketing_strategy">Marketing Strategy</Link>
            </li>
            <li>
              <Link href="/buyers_persona">Buyer's Persona</Link>
            </li>
          </ul>
        </nav>
      </header>

      <div className={styles.about}>
        <div className={styles.container}>
          <h2>Buyer's Persona</h2>
          <p>
            A broad overview of the customer persona is shown below as to who are most likely to experience Apex
            Athletics.
          </p>
        </div>
      </div>

      <div className={styles.flexContainer}>
        <div className={styles.box}>
          <h3>Amateur Alexander</h3>
          <ul>
            <li>Age: 19</li>
            <li>Occupation: Full-time college student</li>
            <li>Personality Traits: Very spontaneous and energetic</li>
            <li>Hobbies: Ultimate frisbee and the guitar</li>
            <li>Challenges: Class schedule is overwhelming and is split between being a member of a club.</li>
            <li>Goals: Maintain his grades and graduate in nursing</li>
            <li>Frustrations: Dividing chores with roommates and living with them</li>
          </ul>
          <img src="/images/alexander.png" alt="Alexander Profile Picture" className={styles.profileImage} />
        </div>
        <div className={styles.box}>
          <h3>Busy Brianna</h3>
          <ul>
            <li>Age: 33</li>
            <li>Occupation: Runs a small bakery</li>
            <li>Personality Traits: Careful and cautious</li>
            <li>Hobbies: Tennis, gardening, and DIY</li>
            <li>Challenges: Always difficult to find time to focus on herself and needs some guidance on what she
              should aspire to achieve next when it comes to her fitness</li>
            <li>Goals: Desires to move to the next level when it comes to exercising and trying new things</li>
            <li>Frustrations: Maintaining a balanced work and personal life</li>
          </ul>
          <img src="/images/brianna.png" alt="Brianna Profile Picture" className={styles.profileImage} />
        </div>
        <div className={styles.box}>
          <h3>Competent Chad</h3>
          <ul>
            <li>Age: 28</li>
            <li>Occupation: Construction worker</li>
            <li>Personality Traits: Values exercise as a necessary part of life to maintain a fit and healthy form</li>
            <li>Hobbies: Video games, movies, baseball</li>
            <li>Challenges: Limited time accounted for exercising and no convenience of state-of-the-art equipment</li>
            <li>Goals: Wants to achieve personal records in the gym and gain personal growth</li>
            <li>Frustrations: Lack of motivation after work to do his hobbies and goals</li>
          </ul>
          <img src="/images/chad.jpg" alt="Chad Profile Picture" className={styles.profileImage} />
        </div>
      </div>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.footerCol}>
              <h4>company</h4>
              <ul>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/buyers_persona">Buyer's Persona</Link>
                </li>
                <li>
                  <Link href="/marketing_strategy">Marketing Strategy</Link>
                </li>
                <li>
                  <Link href="/brand_guide">Brand Guide</Link>
                </li>
              </ul>
            </div>
            <div className={styles.footerCol}>
              <h4>get help</h4>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">shipping</a>
                </li>
                <li>
                  <a href="#">returns</a>
                </li>
                <li>
                  <a href="#">order status</a>
                </li>
                <li>
                  <a href="#">payment options</a>
                </li>
              </ul>
            </div>
            <div className={styles.footerCol}>
              <h4>online shop</h4>
              <ul>
                <li>
                  <a href="#">watch</a>
                </li>
                <li>
                  <a href="#">bag</a>
                </li>
                <li>
                  <a href="#">shoes</a>
                </li>
                <li>
                  <a href="#">dress</a>
                </li>
              </ul>
            </div>
            <div className={styles.footerCol}>
              <h4>follow us</h4>
              <div className={styles.socialLinks}>
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

export default BuyersPersona;
