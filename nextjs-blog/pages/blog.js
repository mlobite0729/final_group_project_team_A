import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const Blog = () => {
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
            <li><Link href="/about">About</Link></li>
            <li><Link href="/privacy_policy">Privacy Policy</Link></li>
            <li><Link href="/blog">Blog</Link></li> {/* Keep Blog link */}
          </ul>
        </nav>
      </header>

      <article>
        <h2>Stay Fit, Stay Healthy</h2>
        <p>Regular exercise is essential for maintaining a healthy lifestyle. At our gym, we provide a variety of workout options that cater to different fitness goals and levels. Whether you're aiming to lose weight, build muscle, or simply improve your overall well-being, our experienced trainers and state-of-the-art equipment are here to help you achieve your goals.</p>
        
        <h2>Boost Your Energy</h2>
        <p>Engaging in regular physical activity can significantly increase your energy levels. Our gym offers a range of cardio and strength training exercises that can help improve your stamina and overall vitality. With a consistent workout routine, you'll find yourself tackling daily tasks with renewed vigor.</p>
        
        <h2>Mental Wellness</h2>
        <p>Exercise is not only beneficial for your body but also for your mind. Physical activity has been shown to reduce stress, anxiety, and even symptoms of depression. Our gym provides a welcoming and supportive environment where you can work on your mental well-being alongside your physical fitness.</p>
        
        <h2>Join Us Today</h2>
        <p>Ready to experience the numerous benefits of regular exercise? Join our gym community today and embark on a journey towards better health and fitness. Our team is dedicated to helping you achieve your goals, whether you're a seasoned fitness enthusiast or just getting started.</p>
      </article>

      <article>
        <h2>1. HIIT Workouts</h2>
        <p>High-Intensity Interval Training (HIIT) is a popular class that combines short bursts of intense exercises with brief recovery periods. This class is perfect for burning calories, improving cardiovascular fitness, and increasing metabolism.</p>
        
        <h2>2. Yoga and Mindfulness</h2>
        <p>Our yoga classes provide a serene environment for improving flexibility, balance, and mental clarity. Whether you're a beginner or an experienced yogi, our skilled instructors will guide you through various poses and breathing techniques.</p>
        
        <h2>3. Strength Training</h2>
        <p>Build muscle and enhance your strength with our dedicated strength training classes. Our trainers will teach you proper form and techniques while using free weights, machines, and bodyweight exercises to target different muscle groups.</p>
        
        <h2>4. Spin Cycling</h2>
        <p>Join our dynamic spin cycling classes for an exhilarating cardio workout. Pedal your way through challenging terrains and intervals, all while accompanied by energizing music and motivating instructors.</p>
        
        <h2>5. Dance Fitness</h2>
        <p>If you're looking to have fun while getting fit, our dance fitness classes are the way to go. Groove to the rhythm of upbeat music while burning calories and improving coordination.</p>
        
        <h2>Enroll Today</h2>
        <p>Ready to take your fitness journey to the next level? Enroll in our exciting fitness classes and enjoy a variety of workouts that suit your interests and fitness goals.</p>
        </article>

        <article>
        <h2>Pre-Workout Fuel</h2>
        <p>Before hitting the gym, it's important to have a balanced meal or snack that provides you with sustained energy. Opt for complex carbohydrates like whole grains, lean protein, and healthy fats to power through your workout and prevent energy crashes.</p>
        
        <h2>Stay Hydrated</h2>
        <p>Proper hydration is key to maximizing your performance. Drink water throughout the day and bring a water bottle to the gym. During intense workouts, consider sports drinks to replenish electrolytes lost through sweat.</p>
        
        <h2>Post-Workout Recovery</h2>
        <p>After your workout, refuel your body with a mix of protein and carbohydrates. Protein helps repair muscles, while carbohydrates restore glycogen stores. A protein shake, a banana, or a turkey and avocado wrap are great post-workout options.</p>
        
        <h2>Snack Smartly</h2>
        <p>Choose nutrient-dense snacks to keep your energy levels steady between meals. Greek yogurt, nuts, fruits, and vegetables are excellent choices that provide vitamins, minerals, and fiber.</p>
        
        <h2>Listen to Your Body</h2>
        <p>Everyone's nutritional needs are unique. Pay attention to how your body responds to different foods and adjust your diet accordingly. Consulting with a registered dietitian can help you create a personalized nutrition plan.</p>
        
        <h2>Final Thoughts</h2>
        <p>Enhance your gym experience by complementing your workouts with proper nutrition. A well-balanced diet can improve your performance, aid in recovery, and contribute to your overall health and fitness goals.</p>
    </article>

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

export default Blog;
