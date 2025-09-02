import React, { useState, useEffect } from "react";
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
    const [isYearly, setIsYearly] = useState(false);
    const [price, setPrice] = useState(20);

    // Animate price like a rolling meter
    useEffect(() => {
        const target = isYearly ? 200 : 20;
        let start = price;
        let startTime = null;
        const duration = 1000; // 0.8s smooth roll

        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const current = Math.floor(start + (target - start) * progress);
            setPrice(current);
            if (progress < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
    }, [isYearly]);

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

    const features = [
        {
            name: 'Custom system prompt',
            starter: true,
            pro: true,
            enterprise: true
        },
        {
            name: 'Pro Responses / day',
            starter: 'Limited',
            pro: 'Unlimited',
            enterprise: 'Unlimited'
        },
        {
            name: 'Token limit',
            starter: 'Unlimited',
            pro: 'Unlimited',
            enterprise: 'Unlimited'
        },
        {
            name: 'Model',
            starter: 'GPT 4.1, GPT o4-mini',
            pro: 'GPT 5, Claude 4',
            enterprise: 'GPT-Enterprise'
        },
        {
            name: 'Single sign-on (IDP)',
            starter: false,
            pro: false,
            enterprise: true
        }
    ];

    const platformFeatures = [
        {
            name: 'Conversations dashboard',
            starter: false,
            pro: true,
            enterprise: true
        },
        {
            name: 'Advanced analytics',
            starter: false,
            pro: false,
            enterprise: true
        },
        {
            name: 'Centralized billing',
            starter: false,
            pro: false,
            enterprise: true
        },
        {
            name: 'Custom integrations',
            starter: false,
            pro: false,
            enterprise: true,
            badge: 'Coming soon'
        },
        {
            name: 'User provisioning & role-based access',
            starter: false,
            pro: false,
            enterprise: true
        }
    ];

    const CheckIcon = () => (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M16.667 5L7.5 14.167L3.333 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    const XIcon = () => (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

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

            <div className={styles.toggleWrapper}>
                <span className={!isYearly ? styles.activeLabel : ""}>Monthly</span>
                <label className={styles.switch}>
                    <input
                        type="checkbox"
                        checked={isYearly}
                        onChange={() => setIsYearly(!isYearly)}
                    />
                    <span className={styles.slider}></span>
                </label>
                <span className={isYearly ? styles.activeLabel : ""}>Yearly</span>
            </div>

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
                    <img src={Icon5} alt="icon" className={`${styles.icon} ${styles.icon6}`} />


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
                            <h3>${price}</h3>{" "}/{" "}{isYearly ? "Year" : "Month"}
                            <p>
                                Advanced features for professionals and small teams.
                            </p>
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

            <div className={styles.featuresTable}>
                <div className={styles.tableHeader}>
                    <div><p>Features</p></div>
                    <div>
                        <p>Starter</p>
                        <button>Download For Windows</button>
                    </div>

                    <div><p>Pro</p>
                        <button>Download For Windows</button></div>
                    <div><p>Enterprise</p>
                        <button>Talk to Sales</button></div>
                </div>

                {features.map((feature, index) => (
                    <div key={index} className={styles.tableRow}>
                        <div className={styles.featureName}>{feature.name}</div>
                        <div className={styles.featureValue}>
                            {typeof feature.starter === 'boolean' ? (
                                feature.starter ? (
                                    <span className={styles.check}><CheckIcon /></span>
                                ) : (
                                    <span className={styles.cross}><XIcon /></span>
                                )
                            ) : (
                                feature.starter
                            )}
                        </div>
                        <div className={styles.featureValue}>
                            {typeof feature.pro === 'boolean' ? (
                                feature.pro ? (
                                    <span className={styles.check}><CheckIcon /></span>
                                ) : (
                                    <span className={styles.cross}><XIcon /></span>
                                )
                            ) : (
                                feature.pro
                            )}
                        </div>
                        <div className={styles.featureValue}>
                            {typeof feature.enterprise === 'boolean' ? (
                                feature.enterprise ? (
                                    <span className={styles.check}><CheckIcon /></span>
                                ) : (
                                    <span className={styles.cross}><XIcon /></span>
                                )
                            ) : (
                                feature.enterprise
                            )}
                        </div>
                    </div>
                ))}

                <div className={styles.sectionTitle}>Platform</div>

                {platformFeatures.map((feature, index) => (
                    <div key={index} className={styles.tableRow}>
                        <div className={styles.featureName}>
                            {feature.name}
                            {feature.badge && <span className={styles.featureBadge}>{feature.badge}</span>}
                        </div>
                        <div className={styles.featureValue}>
                            {typeof feature.starter === 'boolean' ? (
                                feature.starter ? (
                                    <span className={styles.check}><CheckIcon /></span>
                                ) : (
                                    <span className={styles.cross}><XIcon /></span>
                                )
                            ) : (
                                feature.starter
                            )}
                        </div>
                        <div className={styles.featureValue}>
                            {typeof feature.pro === 'boolean' ? (
                                feature.pro ? (
                                    <span className={styles.check}><CheckIcon /></span>
                                ) : (
                                    <span className={styles.cross}><XIcon /></span>
                                )
                            ) : (
                                feature.pro
                            )}
                        </div>
                        <div className={styles.featureValue}>
                            {typeof feature.enterprise === 'boolean' ? (
                                feature.enterprise ? (
                                    <span className={styles.check}><CheckIcon /></span>
                                ) : (
                                    <span className={styles.cross}><XIcon /></span>
                                )
                            ) : (
                                feature.enterprise
                            )}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default PricingPage;
