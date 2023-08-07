import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const PrivacyPolicyPage = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Privacy Policy - Apex Athletics</title>
      </Head>
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

      <div className={styles['main-body']}>
        
        <div className={styles['content-container']}>
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
            or phone number, we will use this information to respond to your inquiries, process your
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
      {/* Footer content */}
    </>
  );
};

export default PrivacyPolicyPage;
