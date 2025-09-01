import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Headphones, MessageSquare, BarChart3 } from 'lucide-react';
import styles from './EnterpriseDashboard.module.css';
import laptop from "../../assets/Macbook Pro.png"

const EnterpriseDashboard = () => {
  const [chartData, setChartData] = useState([]);
  const [theme, setTheme] = useState('light');

  // Listen for theme changes
  useEffect(() => {
    const getCurrentTheme = () => {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) return savedTheme;
      
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      return prefersDark ? "dark" : "light";
    };

    setTheme(getCurrentTheme());

    // Listen for storage changes (when theme is changed from other components)
    const handleStorageChange = () => {
      setTheme(getCurrentTheme());
    };

    window.addEventListener('storage', handleStorageChange);

    // Also listen for attribute changes on document element
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
          const newTheme = document.documentElement.getAttribute('data-theme') || 'light';
          setTheme(newTheme);
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const generateChartData = () =>
      Array.from({ length: 20 }, (_, i) => ({
        height: Math.random() * 80 + 20,
        delay: i * 0.1,
      }));

    setChartData(generateChartData());

    const interval = setInterval(() => {
      setChartData(generateChartData());
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <TrendingUp className={styles.icon} />,
      title: 'Analytics',
      description: 'Advanced analytics and reporting tools for deep insights into your business performance.',
    },
    {
      icon: <Users className={styles.icon} />,
      title: 'Recruiting',
      description: 'Streamline your hiring process with AI-powered candidate matching and assessment tools.',
    },
    {
      icon: <MessageSquare className={styles.icon} />,
      title: 'Consulting',
      description: 'Expert consulting services to optimize your business processes and strategy.',
    },
    {
      icon: <Headphones className={styles.icon} />,
      title: 'Customer Support',
      description: '24/7 premium support with dedicated account managers for enterprise clients.',
    },
  ];

  return (
    <div className={`${styles.container} ${styles[theme]}`} data-theme={theme}>
      <div className={styles.wrapper}>
        {/* Header Section */}
        <div className={styles.header}>
          <div className={styles.first}>Enterprise</div>
          <h1 className={styles.mainTitle}>
            Imagine everyone knew as much<br /> about your company as you.
          </h1>
          <p className={styles.subtitle}>
            Unlock the full potential of your enterprise with our comprehensive dashboard solution.
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
              <div key={index} className={styles.featureCard}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <h4 className={styles.featureTitle}>{feature.title}</h4>
                <p className={styles.featureDesc}>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseDashboard;