import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Apex Athletics Home</title>
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
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-T5WBMXY5KF"
        ></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-T5WBMXY5KF');
          `}
        </script>
        
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
      <div className={styles.hero}>
        <div className={styles.hero_content}>
          <h1 className={styles.hero_heading}>Welcome to Apex Athletics Gym</h1>
          <p className={styles.hero_subheading}>Unlock your full athletic potential</p>
          <button className={styles.hero_button}>Get Started</button>
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

      <div className={styles.about}>
        <div className={styles.container}>
          <h2>About Us</h2>
          <p>
            Apex Athletics Gym is a state-of-the-art fitness facility dedicated to helping individuals achieve their fitness goals. With a team of experienced trainers and a wide range of equipment, we provide a supportive environment for all fitness levels.
          </p>
        </div>
      </div>
      
      

      <div className={styles.services}>
        <div className={styles.container}>
          <h2>Our Services</h2>
          <div className={styles.service}>
            <h3>Personal Training</h3>
            <p>Our certified personal trainers will create a customized workout plan tailored to your specific needs and help you reach your fitness goals faster.</p>
          </div>
          <div className={styles.service}>
            <h3>Group Classes</h3>
            <p>Join our high-energy group classes led by experienced instructors. From cardio and strength training to yoga and pilates, we offer a variety of classes to keep you motivated.</p>
          </div>
          <div className={styles.service}>
            <h3>Nutrition Guidance</h3>
            <p>Our nutrition experts will provide guidance on healthy eating habits and create personalized meal plans to complement your fitness routine.</p>
          </div>
        </div>
      </div>

      <div className={styles.contact}>
        <div className={styles.container}>
          <h2>Contact Us</h2>
          <p>Ready to take the next step in your fitness journey? Contact us today to schedule a consultation or ask any questions you may have.</p>
          <button className={styles.contact_button}>Get in Touch</button>
        </div>
      </div>

 <div className={styles.contact}>
        <div className={styles.container}>
          <h2>Subscribe</h2>
          <div className="indicates-required">
            <span className="asterisk">*</span> indicates required
          </div>
          <form
            action="https://njit.us8.list-manage.com/subscribe/post?u=8b09e19a59951c7377d592ed7&amp;id=4004f2f648&amp;f_id=00647fe0f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
          >
            <div id="mc_embed_signup_scroll">
              <div className="mc-field-group">
                <label htmlFor="mce-EMAIL">
                  Email Address <span className="asterisk">*</span>
                </label>
                <input
                  type="email"
                  name="EMAIL"
                  className="required email"
                  id="mce-EMAIL"
                  required=""
                  value=""
                />
                <span
                  id="mce-EMAIL-HELPERTEXT"
                  className="helper_text"
                ></span>
              </div>
              <div id="mce-responses" className="clear foot">
                <div
                  className="response"
                  id="mce-error-response"
                  style={{ display: 'none' }}
                ></div>
                <div
                  className="response"
                  id="mce-success-response"
                  style={{ display: 'none' }}
                ></div>
              </div>
              <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
                <input
                  type="text"
                  name="b_8b09e19a59951c7377d592ed7_4004f2f648"
                  tabIndex="-1"
                  value=""
                />
              </div>
              <div className="optionalParent">
                <div className="clear foot">
                  <input
                    type="submit"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="button"
                    value="Subscribe"
                  />
                  <p style={{ margin: '0px auto' }}>
                    <a
                      href="http://eepurl.com/ixavO6"
                      title="Mailchimp - email marketing made easy and fun"
                    >
                      <span style={{ display: 'inline-block', backgroundColor: 'transparent', borderRadius: '4px' }}>
                        <img
                          className="refferal_badge"
                          src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                          alt="Intuit Mailchimp"
                          style={{ width: '220px', height: '40px', display: 'flex', padding: '2px 0px', justifyContent: 'center', alignItems: 'center' }}
                        />
                      </span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
        <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);`,
          }}
        ></script>
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

export default Home;
