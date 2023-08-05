import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/Home.module.css';

const ApexAthletics = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Apex Athletics Marketing Strategy</title>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
        />
      </Head>
      <div className={styles['main-body']}>
        <header className={styles.header}>
          <img src="" alt="Logo" className={styles.logo} />

          <h1>Apex Athletics Marketing Strategy (Customer Journey/Sales Funnel)</h1>
          <h2>
            <strong>Archetype: The Hero</strong>
          </h2>
          <h2>Why: Helps individuals transform their lives, overcome challenges, and achieve their goals.</h2>
          <p className={styles.separator}></p>
          <h1>Cialdini’s 6 Principles of Persuasion:</h1>
        </header>

        {/* Rest of the content */}

        <footer className={styles.footer}>
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles['footer-col']}>
                <h4>company</h4>
                <ul>
                  <li>
                    <Link href="/">home</Link>
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
              <div className={styles['footer-col']}>
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
              <div className={styles['footer-col']}>
                <h4>online shop</h4>
                <ul>
                  <li>
                    <a href="#">Apparel</a>
                  </li>
                  <li>
                    <a href="#">Bag</a>
                  </li>
                  <li>
                    <a href="#">Shoes</a>
                  </li>
                </ul>
              </div>
              <div className={styles['footer-col']}>
                <h4>follow us</h4>
                <div className={styles['social-links']}>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ApexAthletics;
