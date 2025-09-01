import React, { useState } from "react";
import styles from "../styles/careers.module.css";

const jobData = [
  { title: "Devops Engineer", location: "India", category: "Testing & Deployment", type: "Permanent" },
  { title: "Prompt Engineer", location: "UAE", category: "AI & Development", type: "Permanent" },
  { title: "AI Engineer", location: "USA", category: "AI & Development", type: "Permanent" },
  { title: "Frontend Developer", location: "India Bangalore", category: "AI & Development", type: "Permanent" },
  { title: "Full Stack Developer", location: "India Bangalore", category: "AI & Development", type: "Permanent" },
];

function Careers() {
  const [jobs] = useState(jobData);
  const [location, setLocation] = useState("All");
  const [category, setCategory] = useState("All");
  const [type, setType] = useState("All");

  const filteredJobs = jobs.filter(
    (job) =>
      (location === "All" || job.location === location) &&
      (category === "All" || job.category === category) &&
      (type === "All" || job.type === type)
  );

  return (
    <section className={styles.careers}>
      <h4 className={styles.subtitle}>Careers</h4>
      <h2 className={styles.title}>
        Work on what matters. Grow beyond limits. <br />
        Join a team that builds the future.
      </h2>
      <h3 className={styles.openRoles}>Open Roles</h3>

      {/* Filters */}
      <div className={styles.filters}>
        <select value={location} onChange={(e) => setLocation(e.target.value)} className={styles.filterDropdown}>
          <option value="All">All Locations</option>
          <option value="India">India</option>
          <option value="India Bangalore">India Bangalore</option>
          <option value="UAE">UAE</option>
          <option value="USA">USA</option>
        </select>

        <select value={category} onChange={(e) => setCategory(e.target.value)} className={styles.filterDropdown}>
          <option value="All">All Categories</option>
          <option value="Testing & Deployment">Testing & Deployment</option>
          <option value="AI & Development">AI & Development</option>
        </select>

        <select value={type} onChange={(e) => setType(e.target.value)} className={styles.filterDropdown}>
          <option value="All">All Job Types</option>
          <option value="Permanent">Permanent</option>
        </select>
      </div>

      <p className={styles.resultCount}>
        {filteredJobs.length} Jobs found.
      </p>

      {/* Job Cards */}
      <div className={styles.jobList}>
        {filteredJobs.map((job, idx) => (
          <div key={idx} className={styles.jobCard}>
            <div>
              <h4>{job.title}</h4>
              <p>{job.location}</p>
              <span className={styles.tag}>{job.category}</span>
            </div>
            <span className={styles.type}>{job.type}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Careers;
