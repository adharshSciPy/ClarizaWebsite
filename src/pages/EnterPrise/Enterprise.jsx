import React, { useState, useEffect } from "react";
import { ChevronDown } from 'lucide-react';
import { Link } from "react-router";
import {
  TrendingUp,
  Users,
  Headphones,
  MessageSquare,
} from "lucide-react";
import styles from "./EnterpriseDashboard.module.css";
import laptop from "../../assets/Macbook Pro.png";
import laptop1 from "../../assets/Macbook Pro@2x.png";

const EnterpriseDashboard = () => {
  const [theme, setTheme] = useState("light");

  // Listen for theme changes
  useEffect(() => {
    const getCurrentTheme = () => {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) return savedTheme;

      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      return prefersDark ? "dark" : "light";
    };

    setTheme(getCurrentTheme());

    // Listen for storage changes (when theme is changed from other components)
    const handleStorageChange = () => {
      setTheme(getCurrentTheme());
    };

    window.addEventListener("storage", handleStorageChange);

    // Also listen for attribute changes on document element
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "data-theme"
        ) {
          const newTheme =
            document.documentElement.getAttribute("data-theme") || "light";
          setTheme(newTheme);
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      observer.disconnect();
    };
  }, []);

  // useEffect(() => {
  //   const generateChartData = () =>
  //     Array.from({ length: 20 }, (_, i) => ({
  //       height: Math.random() * 80 + 20,
  //       delay: i * 0.1,
  //     }));

  //   setChartData(generateChartData());

  //   const interval = setInterval(() => {
  //     setChartData(generateChartData());
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, []);

  const features = [
    {
      icon: <TrendingUp className={styles.icon} />,
      title: "Analytics",
      description:
        "Advanced analytics and reporting tools for deep insights into your business performance.",
      link:"View dashboard"
    },
    {
      icon: <Users className={styles.icon} />,
      title: "Recruiting",
      description:
        "Streamline your hiring process with AI-powered candidate matching and assessment tools.",
      link:"View dashboard"

    },
    {
      icon: <MessageSquare className={styles.icon} />,
      title: "Consulting",
      description:
        "Expert consulting services to optimize your business processes and strategy.",
      link:"View dashboard"

    },
    {
      icon: <Headphones className={styles.icon} />,
      title: "Customer Support",
      description:
        "24/7 premium support with dedicated account managers for enterprise clients.",
      link:"View dashboard"

    },
  ];
  const featuresTwo = [
    {
      icon: <TrendingUp className={styles.icon} />,
      link: "View Dashboard",
      description: "Advanced analytics and reporting tools.",
    },
    {
      icon: <Users className={styles.icon} />,
      link: "View Dashboard",

      description: "Streamline your hiring process with AI-powered.",
    },
    {
      icon: <MessageSquare className={styles.icon} />,
      link: "View Dashboard",
      description:
        "Expert consulting services to optimize your business processes.",
    },
  ];
const [activeIndex, setActiveIndex] = useState(null);

    const faqData = [
      {
        question: "Why real-time vs. a regular AI notetaker?",
        answer:
          "Unlike regular AI notetakers like Otter or Granola that work after your meeting ends, Cluely provides real-time meeting intelligence during your calls. While other AI meeting assistants create meeting summaries afterward, Cluely gives you instant answers, live definitions, and contextual insights while you're still talking. This means you can handle objections, answer technical questions, and perform better during high-stakes conversations.",
      },
      {
        question: "Who is Cluely for?",
        answer:
          "Cluely is perfect for sales professionals, consultants, customer success managers, and anyone who needs to perform at their best during important conversations. Whether you're closing deals, handling technical discussions, or managing client relationships, Cluely helps you stay informed and confident in real-time.",
      },
      {
        question: "Is Cluely free?",
        answer:
          "Cluely offers both free and premium plans. Our free tier includes basic real-time assistance for up to 10 meetings per month. Premium plans unlock unlimited meetings, advanced AI features, custom integrations, and priority support.",
      },
      {
        question: "How is it invisible in meetings?",
        answer:
          "Cluely works completely in the background without joining your meetings as a visible participant. It integrates directly with your existing tools and provides assistance through discrete notifications and alerts.",
      },
      {
        question: "What languages and apps are supported?",
        answer:
          "Cluely supports over 50 languages and integrates with popular meeting platforms including Zoom, Microsoft Teams, Google Meet, Slack, and more. We also support CRM systems like Salesforce, HubSpot, and Pipedrive.",
      },
      {
        question: "Can I talk to customer support?",
        answer:
          "Yes! Our customer support team is available 24/7 via live chat, email, and phone. Premium users get priority support with guaranteed response times. You can also access our help center and community forums.",
      },
    ];

    const toggleFAQ = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  return (
    <div className={`${styles.container} ${styles[theme]}`} data-theme={theme}>
      <div className={styles.wrapper}>
        {/* Header Section */}
        <div className={styles.header}>
          <div className={styles.first}>Enterprise</div>
          <h1 className={styles.mainTitle}>
            Imagine everyone knew as much
            <br /> about your company as you.
          </h1>
          <p className={styles.subtitle}>
            Unlock the full potential of your enterprise with our comprehensive
            dashboard solution.
          </p>
        </div>

        {/* Laptop Mockup */}
        <div className={styles.laptopSection}>
          <div className={styles.laptop}>
            <img src={laptop} alt="" />
          </div>
        </div>

        {/* Features */}
        <div className={styles.bottomSection}>
          <div className={styles.first}>Real-time AI for every moment</div>

          <h3 className={styles.bottomTitle}>
            Imagine everyone knew as much about your
            <br />
            company as you.
          </h3>

          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCardFirst} >
                <div className={styles.featureIcon} style={{margin:"0"}}>{feature.icon}</div>
                <h4 className={styles.featureTitle}>{feature.title}</h4>
                <p className={styles.featureDesc} style={{paddingBottom:"10px"}}>{feature.description}</p>
                <p className={styles.featureTitle}>
                  <Link to="" className={styles.linkStyle}>
                    {feature.link}
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Laptop Mockup */}
        <div className={styles.laptopSection} style={{ marginTop: "130px" }}>
          <div className={styles.laptop}>
            <img src={laptop1} alt="" />
          </div>
        </div>
        {/* Features */}
        <div className={styles.bottomSection}>
          <div className={styles.featuresGridTwo}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h4 className={styles.featureTitle}>{feature.title}</h4>
                <p className={styles.featureDesc}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.bottomSection}>
          <div className={styles.first}>Everything about our company</div>

          <h3 className={styles.bottomTitle} style={{ marginTop: "15px" }}>
            Delivered exactly when you need it
          </h3>

          <div className={styles.featuresGridThree}>
            {featuresTwo.map((feature, index) => (
              <div key={index} className={styles.featureCardThree}>
                <div className={styles.featureIcon} style={{ margin: "0" }}>
                  {feature.icon}
                </div>
                <p className={styles.featureTitle}>
                  <Link to="" className={styles.linkStyle}>
                    {feature.link}
                  </Link>
                </p>
                <p className={styles.featureDescThree}>{feature.description}</p>
              </div>
            ))}
          </div>
          <div className={styles.featuresGridFour}>
            <div className={styles.wrapperTwo}>
              <h1 className={styles.first} style={{fontSize:"36px",fontWeight:"400"}}>Frequently asked questions</h1>

              <div className={styles.faqList}>
                {faqData.map((faq, index) => (
                  <div
                    key={index}
                    className={`${styles.faqItem} ${
                      activeIndex === index ? styles.active : ""
                    }`}
                  >
                    <div
                      className={styles.faqHeader}
                      onClick={() => toggleFAQ(index)}
                    >
                      <h3 className={styles.faqQuestion}>{faq.question}</h3>
                      <ChevronDown
                        className={`${styles.faqIcon} ${
                          activeIndex === index ? styles.expanded : ""
                        }`}
                      />
                    </div>

                    <div
                      className={`${styles.faqContent} ${
                        activeIndex === index ? styles.expanded : ""
                      }`}
                    >
                      <p className={styles.faqAnswer}>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseDashboard;
