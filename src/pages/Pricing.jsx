import React, { useState } from "react";
import styles from "../styles/Pricing.module.css";
import laptop from "../assets/MacBookPro14(1).png"
import Icon1 from "../assets/Icon1.png"
import Icon2 from "../assets/Icon2.png"
import Icon3 from "../assets/Icon3.png"
import Icon4 from "../assets/Icon4.png"
import Icon5 from "../assets/Icon5.png"
import { Link } from "react-router-dom"



const PricingPage = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqData = [
        {
            question: "Why should I upgrade to Pro?",
            answer:
                "You get access to advanced analytics, unlimited projects, and premium support.",
        },
        {
            question: "Is Claria free?",
            answer: "Yes! You can use the free plan forever.",
        },
        {
            question: "Can I cancel anytime?",
            answer: "Yes, you can cancel or downgrade anytime from your dashboard.",
        },
    ];

    return (
        <div className={styles.pricingContainer}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <h3 className={styles.sectionTitle}>Pricing</h3>
                <h1>
                    Start for free.
                    <br /> Get used to winning.
                </h1>
            </section>

            {/* Laptop Mockup with Plans */}
            <section className={styles.laptopSection}>
                <h2 className={styles.subHeading}>Choose your Plan</h2>
                <div className={styles.laptopWrapper}>
                    <img
                        src={laptop}
                        alt="Laptop Mockup"
                        className={styles.laptopImage}
                    />

                    {/* Floating Icons */}
                    <img src={Icon1} alt="icon" className={`${styles.icon} ${styles.icon1}`} />
                    <img src={Icon2} alt="icon" className={`${styles.icon} ${styles.icon2}`} />
                    <img src={Icon3} alt="icon" className={`${styles.icon} ${styles.icon3}`} />
                    <img src={Icon4} alt="icon" className={`${styles.icon} ${styles.icon4}`} />
                    <img src={Icon5} alt="icon" className={`${styles.icon} ${styles.icon5}`} />


                    {/* Pricing Cards inside Laptop */}
                    <div className={styles.plans}>
                        <div className={styles.planCard}>
                            <h3>Free</h3>
                            <p>
                                Perfect for starters with basic features to get going quickly.
                            </p>
                            <Link className={styles.planLink}>View dashboard</Link>
                        </div>

                        <div className={styles.planCard}>
                            <h3>Pro</h3>
                            <p>Advanced features for professionals and small teams.</p>
                            <Link className={styles.planLink}>View dashboard</Link>
                        </div>

                        <div className={styles.planCard}>
                            <h3>Enterprise</h3>
                            <p>
                                Best for large teams and enterprises needing custom solutions.
                            </p>
                            <Link className={styles.planLink}>View dashboard</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className={styles.features}>
                <h3>Features</h3>
                {faqData.map((item, index) => (
                    <details
                        key={index}
                        open={openIndex === index}
                        onClick={(e) => {
                            e.preventDefault();
                            setOpenIndex(openIndex === index ? null : index);
                        }}
                    >
                        <summary>{item.question}</summary>
                        <p>{item.answer}</p>
                    </details>
                ))}
            </section>
        </div>
    );
};

export default PricingPage;
