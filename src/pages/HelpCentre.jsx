import React, { useState } from "react";
import styles from "../styles/helpCentre.module.css";
import { Search } from "lucide-react";
import { Link} from "react-router-dom";

// Import your floating icons
import Icon1 from "../assets/Icon1.png";
import Icon2 from "../assets/Icon2.png";
import Icon3 from "../assets/Icon3.png";
import Icon4 from "../assets/Icon4.png";
import Icon5 from "../assets/Icon5.png";
import Icon6 from "../assets/Icon6.png";

const HelpCentre = () => {
  const [query, setQuery] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  const categories = [
    {
      title: "Getting Started",
      desc:
        "Our Analytics Dashboard provides a clear and intuitive .Our Analytics Dashboard provides a clear and intuitive .Our Analytics Dashboard provides a clear and intuitive .Our Analytics  Dashboard provides a clear and intuitive .",
      count: 12,
    },
    { title: "Use Case", desc: "Examples & integrations", count: 18 },
    { title: "Troubleshooting", desc: "Common errors and fixes", count: 32 },
    {
      title: "Customer Support",
      desc: "Contact details & helpdesk",
      count: 10,
    },
  ];

  const articles = [
    {
      id: 1,
      title: "Article 1",
      content: "Our Analytics Dashboard provides a one-glance solution...",
    },
    {
      id: 2,
      title: "Article 2",
      content: "Discover how to maximize performance with our Dashboard...",
    },
    {
      id: 3,
      title: "Article 3",
      content: "Step-by-step guide to integrate external APIs easily...",
    },
    {
      id: 4,
      title: "Article 4",
      content: "How to resolve the most common configuration issues...",
    },
    {
      id: 5,
      title: "Article 5",
      content: "A complete breakdown of advanced analytics features...",
    },
    {
      id: 6,
      title: "Article 6",
      content: "Learn to customize dashboards for different user roles...",
    },
  ];

  const filteredArticles = articles.filter(
    (a) =>
      a.title.toLowerCase().includes(query.toLowerCase()) ||
      a.content.toLowerCase().includes(query.toLowerCase())
  );
  const faqs = [
    {
      question: "Why real-time vs. a regular AI notetaker?",
      answer:
        "Unlike regular AI notetakers like Otter or Gong that work after your meeting, Cluely captures insights as the conversation happens. This means you get context instantly and don’t miss critical points.",
    },
    {
      question: "Who is Cluely for?",
      answer:
        "Cluely is built for teams, managers, and professionals who need real-time meeting insights.",
    },
    {
      question: "Is Cluely free?",
      answer:
        "Yes, Cluely offers a free plan with limited usage, plus paid plans for advanced features.",
    },
    {
      question: "How is it invisible in meetings?",
      answer:
        "Cluely runs silently in the background without interrupting your meeting flow.",
    },
    {
      question: "What languages and apps are supported?",
      answer:
        "Cluely supports multiple languages and works across popular conferencing apps like Zoom, Teams, and Meet.",
    },
    {
      question: "Can I talk to customer support?",
      answer:
        "Yes, you can reach out to our support team anytime via live chat or email.",
    },
  ];
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <small>Help Center</small>
          <h1>Tips and support from the Clariza Team</h1>
        </div>

        {/* Search */}
        <div className={styles.searchBox}>
          <Search size={18} className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search for Article"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className={styles.contentBox}>
          <div className={styles.outerBox}>
            {/* Categories */}
            <h2 className={styles.sectionTitle}>Articles</h2>
            <div className={styles.categories}>
              {categories.map((cat, i) => (
                <div key={i} className={styles.card}>
                  <div className={styles.cardIcon}>📑</div>
                  <h3>{cat.title}</h3>
                  <p>{cat.desc}</p>
                  <small>{cat.count} articles</small>
                </div>
              ))}
            </div>

            {/* Most Viewed */}
            <h2 className={styles.sectionTitle}>Most Viewed Articles</h2>
            <div className={styles.articles}>
              {filteredArticles.map((article) => (
                <div key={article.id} className={styles.articleCard}>
                  <h3>{article.title}</h3>
                  <p>{article.content}</p>
                  <Link to="/article">Read more</Link>
                </div>
              ))}
            </div>

            {/* Floating icons */}
            <img
              src={Icon1}
              alt="chat"
              className={`${styles.floatIcon} ${styles.icon1}`}
            />
            <img
              src={Icon2}
              alt="glasses"
              className={`${styles.floatIcon} ${styles.icon2}`}
            />
            <img
              src={Icon3}
              alt="video"
              className={`${styles.floatIcon} ${styles.icon3}`}
            />
            <img
              src={Icon4}
              alt="support"
              className={`${styles.floatIcon} ${styles.icon4}`}
            />
            <img
              src={Icon5}
              alt="v"
              className={`${styles.floatIcon} ${styles.icon5}`}
            />
            <img
              src={Icon6}
              alt="support"
              className={`${styles.floatIcon} ${styles.icon6}`}
            />
          </div>
        </div>
      </div>
      {/* FAQ Section */}
      <div className={styles.faqWrapper}>
        <div className={styles.faqContainer}>
          <h2 className={styles.sectionTitle}>Frequently asked questions</h2>

          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${
                openIndex === index ? styles.active : ""
              }`}
              onClick={() => toggleFAQ(index)}
            >
              <div className={styles.faqQuestion}>
                <span>{faq.question}</span>
                <span className={styles.chevron}>▼</span>
              </div>
              <p className={styles.faqAnswer}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HelpCentre;
