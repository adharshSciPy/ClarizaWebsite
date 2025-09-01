import React from 'react'
import styles from "../styles/footer.module.css";
import {Link} from "react-router-dom"

function Footer() {
   return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Contact */}
        <div className={styles.column}>
          <h3>Contact</h3>
          <p>Work inquires: work@clariza.com</p>
          <p>PR and speaking: press@clariza.com</p>
          <p>New business: newbusiness@clariza.com</p>
        </div>

        {/* Careers */}
        <div className={styles.column}>
          <h3>Careers</h3>
          <p>careers@clariza.com</p>
        </div>

        {/* Address */}
        <div className={styles.column}>
          <h3>Address</h3>
          <p>398 11th Street, Floor 2</p>
          <p>San Francisco, CA 94103</p>
        </div>

        {/* Social */}
        <div className={styles.column}>
          <h3>Social</h3>
          <Link to="#">Twitter</Link>
          <Link to="#">Instagram</Link>
          <Link to="#">TikTok</Link>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2025 Clariza. All Rights Reserved.</p>
        <span className={styles.logo}>⚡ Clariza</span>
      </div>
    </footer>
  );
}

export default Footer

