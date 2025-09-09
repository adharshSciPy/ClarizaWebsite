import React, { useEffect, useState } from 'react';
import { ChevronRight, Plane } from 'lucide-react';
import styles from "../styles/support.module.css";

function Support() {
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  const articles = [
    {
      title: "Downloading Cluely",
      description: "This guide will help you get up and running quickly."
    },
    {
      title: "Basic Checks",
      description: "Verify if Cluely works on your system before subscribing."
    },
    {
      title: "How to Customize Cluely",
      description: "Add custom templates for different call types and add Resume/File uploads for total customization."
    },
    {
      title: "Moving Cluely: Screen Position and Different Displays or Monitors",
      description: "Change Cluely's position with the dot bar lets for drag & drop or going to Profile > Settings > Change Display."
    },
    {
      title:"How to Change Languages"
    },
    {
      title:"How to Use Live Insights & Default Actions",
      description:"From one-click follow up questions,recaps,fact checking,and more"
    },
    {
      title:"Live Insights:Using Smart Mode",
      description:"activate web search,details,and complex reasoning in the click of a button"
    },
    {
      title:"How to Copy Transcript",
      description:"Need the full transcript"
    },
    {
      title:"Cluely Desktop App Guide",
      description:"Need the full transcript"
    },
  ];

  const getArticleItemClass = (index) => {
    let className = styles.articleItem;
    if (index === 0) className += ` ${styles.articleItemFirst}`;
    if (index === articles.length - 1) className += ` ${styles.articleItemLast}`;
    if (hoveredIndex === index) className += ` ${styles.articleItemHover}`;
    return className;
  };
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
  return (
    <div className={`${styles.container} ${theme === "dark" ? styles.dark : styles.light}`}>
      {/* Breadcrumb */}
      <nav className={styles.breadcrumb}>
        <a href="#" className={styles.breadcrumbLink}>All Collections</a>
        <ChevronRight size={16} style={{ margin: '0 8px', color: '#9ca3af' }} />
        <span className={styles.breadcrumbCurrent}>Getting Started</span>
      </nav>

      {/* Header */}
      <header className={styles.header}>
        <div className={styles.iconContainer}>
          <Plane size={24} color="white" />
        </div>
        <h1 className={styles.title}>Getting Started</h1>
        <p className={styles.subtitle}>Everything you need to get going.</p>
      </header>

      {/* Article count */}
      <div className={styles.articleCount}>
        {articles.length} articles
      </div>

      {/* Article list */}
      <div className={styles.articleList}>
        {articles.map((article, index) => (
          <div
            key={index}
            className={getArticleItemClass(index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className={styles.articleContent}>
              <h3 className={styles.articleTitle}>{article.title}</h3>
              <p className={styles.articleDescription}>{article.description}</p>
            </div>
            <ChevronRight size={20} className={styles.chevron} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Support;
