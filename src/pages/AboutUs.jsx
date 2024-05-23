import React from 'react';
import styles from './aboutUs.module.css';

function AboutUs(){ //Just a simple aboutus page
  return (
    <div className={styles.aboutUs}>
      <h1>About Us</h1>
      <p>
        Welcome to <strong>MyStore</strong>! We are a vibrant and inclusive online marketplace founded by a passionate queer couple, Alex and Taylor. Our journey began with a shared dream of creating a space where everyone feels welcome, and where high-quality clothing, electronics, and jewelry are accessible to all.
      </p>
      <p>
        With diverse backgrounds in fashion design and tech innovation, we decided to combine our talents and build <strong>MyStore</strong>. Our goal is to offer products that reflect our commitment to inclusivity, style, and cutting-edge technology. Each item is carefully curated to ensure it meets our high standards for quality and uniqueness.
      </p>
      <p>
        We believe in the power of community and strive to support and uplift underrepresented voices in the fashion and tech industries. Thank you for being a part of our story, and we hope you find something special that speaks to you at <strong>MyStore</strong>.
      </p>
    </div>
  );
};

export default AboutUs;
