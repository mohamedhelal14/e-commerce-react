import React from 'react';
import { FaShippingFast, FaShieldAlt, FaHeadset, FaAward } from 'react-icons/fa';
import './About.css';

function About() {
  return (
    <div className="about_page">
      <div className="container">
        <div className="about_header">
          <h2>About Manga pro max Online Store</h2>
          <p>Your ultimate destination for top-quality electronics, gadgets, and everyday technology essentials.</p>
        </div>

        <div className="about_content">
          <div className="about_text">
            <h3>Who We Are</h3>
            <p>
              Founded with a passion for innovation, Manga pro max Online Store brings you the latest high-end tech products, smart devices, and accessories at competitive prices. We believe technology should empower your lifestyle and make daily routines effortless.
            </p>
            <p>
              Our mission is to deliver exceptional customer satisfaction by pairing world-class products with fast shipping and trusted support.
            </p>
          </div>
        </div>

        <div className="features_grid">
          <div className="feature_card">
            <FaShippingFast className="feature_icon" />
            <h4>Fast Shipping</h4>
            <p>Reliable and speedy delivery straight to your doorstep on all orders.</p>
          </div>
          <div className="feature_card">
            <FaShieldAlt className="feature_icon" />
            <h4>Secure Payments</h4>
            <p>100% encrypted transactions guaranteeing your data and funds safety.</p>
          </div>
          <div className="feature_card">
            <FaHeadset className="feature_icon" />
            <h4>24/7 Support</h4>
            <p>Dedicated customer support team ready to assist you anytime.</p>
          </div>
          <div className="feature_card">
            <FaAward className="feature_icon" />
            <h4>Quality Guarantee</h4>
            <p>Curated items sourced directly from certified original brands.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;