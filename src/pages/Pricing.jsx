import React from "react";
import styles from "../styles/Pricing.module.css";

const PricingPage = () => {
    return (
        <div className={styles.pricingContainer}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <h3 className={styles.sectionTitle}>Pricing</h3>
                <h1>
                    Start for free.
                    <br /> Get used to winning.
                </h1>
                <h2 className={styles.subHeading}>Choose your Plan</h2>
            </section>

            {/* Pricing Cards */}
            <section className={styles.plans}>
                <div className={styles.planCard}>
                    <h3>Free</h3>
                    <p>Perfect for starters with basic features to get going quickly.</p>
                    <p>Our Analytics Dashboard provides a clear and intuitive interface for you to easily analyze your data.
                        From customizable graphs to real-time data updates, our dashboard offers everything you need to gain valuable insights.</p>
                    <button className={styles.btnOutline}>View Freeboard</button>
                </div>

                <div className={styles.planCard}>
                    <h3>Pro</h3>
                    <p>Advanced features for professionals and small teams.</p>
                    <p>Our Analytics Dashboard provides a clear and intuitive interface for you to easily analyze your data.
                        From customizable graphs to real-time data updates, our dashboard offers everything you need to gain valuable insights.</p>
                    <button className={styles.btnDark}>View Dashboard</button>
                </div>

                <div className={styles.planCard}>
                    <h3>Enterprise</h3>
                    <p>Best for large teams and enterprises needing custom solutions.</p>
                    <p>Our Analytics Dashboard provides a clear and intuitive interface for you to easily analyze your data.
                        From customizable graphs to real-time data updates, our dashboard offers everything you need to gain valuable insights.</p>
                    <button className={styles.btnOutline}>View Pricing</button>
                </div>
            </section>

            {/* FAQ Section */}
            <section className={styles.features}>
                <h3>Features</h3>
                <details>
                    <summary>Why should I upgrade to Pro?</summary>
                    <p>
                        You get access to advanced analytics, unlimited projects, and
                        premium support.
                    </p>
                </details>
                <details>
                    <summary>Is Claria free?</summary>
                    <p>Yes! You can use the free plan forever.</p>
                </details>
                <details>
                    <summary>Can I cancel anytime?</summary>
                    <p>Yes, you can cancel or downgrade anytime from your dashboard.</p>
                </details>
            </section>
        </div>
    );
};

export default PricingPage;
