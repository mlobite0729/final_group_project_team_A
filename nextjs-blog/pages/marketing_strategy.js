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
        <img src="/Apex_Athletics_logo.png" alt="Logo" className={styles.logo} />
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

    <div className={styles.main_body}>
        
          <h1>Apex Athletics Marketing Strategy (Customer Journey/Sales Funnel)</h1>
          <h2>
            <strong>Archetype: The Hero</strong>
          </h2>
          <h2>Why: Helps individuals transform their lives, overcome challenges, and achieve their goals.</h2>
          
          <h1>Cialdini’s 6 Principles of Persuasion:</h1>
        
        <table>
        <thead>
          <tr>
            <th></th>
            <th>Reciprocity</th>
            <th>Commitment and Consistency</th>
            <th>Social Proof</th>
            <th>Authority</th>
            <th>Liking</th>
            <th>Scarcity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Awareness</td>
            <td>Offer free trial for new members</td>
            <td>Encourage customers to make a commitment</td>
            <td>Focus on highly-rated reviews</td>
            <td>Highly Certified trainers</td>
            <td>Show relatability and likeability</td>
            <td>Limited-time promotional offers</td>
          </tr>
          <tr>
            <td>Consideration</td>
            <td>Discounts</td>
            <td>Long-term commitment</td>
            <td>Reviews</td>
            <td>Highlight endorsements</td>
            <td>Sense of community</td>
            <td>Limited availability of memberships</td>
          </tr>
          <tr>
            <td>Conversion</td>
            <td>Referral incentives</td>
            <td>Supportive</td>
            <td>Membership option</td>
            <td>Industry proficiency</td>
            <td>Social connections</td>
            <td>Limited space</td>
          </tr>
          <tr>
            <td>Loyalty</td>
            <td>Member-only rewards</td>
            <td>Reinforce past goals</td>
            <td>Encouragement for others</td>
            <td>Highlight endorsements</td>
            <td>Close bonds among members</td>
            <td>Limited loyalty services</td>
          </tr>
        </tbody>
      </table>

      
      <h1>SWOT Analysis</h1>
      <div className={styles.section}>
        <h2>Strengths</h2>
        <p>
          Strong brand identity: Apex Athletics has successfully established a strong brand identity in the fitness industry through consistent use of colors, fonts, and messaging, making it easily recognizable.
        </p>
        <p>
          Network of locations: With multiple well-equipped gym locations across different areas, Apex Athletics has a wide reach, attracting a diverse customer base.
        </p>
        <p>
          Membership Programs: Offering various membership programs, including flexible options and attractive incentives, ensures that customers can find the best fit for their fitness goals and preferences.
        </p>
      </div>

      <div className={styles.section}>
        <h2>Weaknesses</h2>
        <p>
          Intense competition: The fitness industry is highly competitive, and Apex Athletics faces tough competition from both local and national fitness chains as well as boutique studios.
        </p>
        <p>
          Complaints about customer service: Some customers have reported issues with customer service, such as difficulties in canceling memberships and delays in addressing concerns.
        </p>
        <p>
          Limiting Customer Market: The increasing popularity of in-home and hotel gyms has led to reduced demand for standalone gym facilities.
        </p>
      </div>

      <div className={styles.section}>
        <h2>Opportunities</h2>
        <p>
          Rising growth in the health and fitness industry: The growing awareness of health and fitness benefits presents an opportunity for Apex Athletics to attract more individuals seeking a supportive fitness experience.
        </p>
        <p>
          Expanding into new markets: Exploring untapped domestic and international markets can lead to further growth and increased market share for Apex Athletics.
        </p>
        <p>
          More Valued Services: Offering additional services such as personalized training programs, healthy food options, and fitness apparel can enhance customer experiences and generate additional revenue.
        </p>
      </div>

      <div className={styles.section}>
        <h2>Threats</h2>
        <p>
          Economic downturns or factors: Economic uncertainties can impact consumers' disposable income and their willingness to spend on gym memberships and fitness services.
        </p>
        <p>
          Health and safety concerns: Public health crises or safety issues at fitness facilities can affect gym operations and reduce customer confidence.
        </p>
        <p>
          Intense competition: The presence of numerous players in the fitness industry, combined with the availability of online fitness platforms and home workout options, poses a threat to Apex Athletics' traditional gym memberships.
        </p>
        <p>
          Changing consumer preferences: Rapidly evolving fitness trends and shifting consumer preferences require Apex Athletics to continuously adapt to remain relevant and competitive.
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

export default ApexAthletics;
