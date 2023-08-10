import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';


const PrivacyPolicyPage = () => {
  const pageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center horizontally
    justifyContent: 'center', // Center vertically
    minHeight: '100vh', // Ensure the content takes the full viewport height
    padding: '20px',
  };

  const contentStyle = {
    maxWidth: '800px',
    textAlign: 'center',
    color: 'Black', // Text color set to red
  };



  return (
    <>
     <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Apex Athletics Privacy Policy</title>
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
          <h1>Privacy Policy</h1>
          <p>
            At Apex Athletics, we are committed to protecting your privacy and ensuring the security
            of your personal information. This Privacy Policy explains how we collect, use, disclose,
            and safeguard your data when you interact with our website and services.
          </p>
          <h2>Information We Collect</h2>
          <p>
            When you visit our website, we may collect certain information automatically from your
            device, including your IP address, browser type, operating system, and browsing activity.
            We also use cookies and similar technologies to enhance your browsing experience and
            gather information about how you use our website.
          </p>
          <p>
            If you choose to provide us with personal information, such as your name, email address,
            we will use this information to respond to your inquiries, process your
            orders, and improve our services. We do not sell, rent, or share your personal information
            with third parties for marketing purposes.
          </p>
          <h2>Security of Your Information</h2>
          <p>
            We take reasonable measures to protect your personal information from unauthorized access,
            use, or disclosure. However, please note that no data transmission over the internet or
            electronic storage method is completely secure. While we strive to protect your data, we
            cannot guarantee its absolute security.
          </p>
          <h2>Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites or services. Please be aware that
            we are not responsible for the content or privacy practices of these third-party sites.
            We encourage you to review their privacy policies before providing any personal information.
          </p>
          <h2>Updates to this Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices
            or for other operational, legal, or regulatory reasons. We will notify you of any significant
            changes by posting the revised policy on our website or by other means as required by law.
            Please check this page periodically to stay informed about our latest privacy practices.
          </p>
          <p>
            If you have any questions or concerns about our Privacy Policy, please contact us at
            privacy@apexathletics.com.
          </p>
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

    </>
    
  );
};

export default PrivacyPolicyPage;
