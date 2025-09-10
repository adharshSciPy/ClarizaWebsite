import React from 'react'
import { BarChart3, Download, MessageCircle, Plus } from 'lucide-react';
import "../styles/home.css"
import laptop1 from "../assets/Macbook Pro.png"

function Home() {
  return (
     <div className="page-container" data-theme="dark">
      {/* Header Notification */}
      <header className="header">
        <div className="notification-banner">
          <span className="notification-text">We just raised $20M in Series B. Learn more.</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="container">
        {/* Hero Section */}
        <div className="hero">
          <h1 className="hero-title">
            It's like Googling<br />
            Mid-Sentence
          </h1>
          <p className="hero-subtitle">
            Cluely gives you the answers you didn't study for in every<br />
            conversation, without you even having to ask.
          </p>
          
          {/* CTA Buttons */}
          <div className="cta-container">
            <button className="btn btn-primary">
              <Download size={18} />
              Download the app
            </button>
            <button className="btn btn-secondary">
              <MessageCircle size={18} />
              Talk to an expert
            </button>
          </div>
        </div>

        {/* Dashboard Mockup */}
        <div className="dashboard-container">
          <div className="dashboard">
            {/* Dashboard Header */}
            <div className="dashboard-header">
              <div className="header-controls">
                <div className="window-controls">
                  <div className="traffic-lights">
                    <div className="traffic-light red"></div>
                    <div className="traffic-light yellow"></div>
                    <div className="traffic-light green"></div>
                  </div>
                  <nav className="nav">
                    <span className="nav-item active">Dashboard</span>
                    <span className="nav-item">Digital tokens</span>
                    <span className="nav-item">Analytics</span>
                  </nav>
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="dashboard-content">
              <div className="dashboard-grid">
                {/* Left Sidebar */}
                <div className="sidebar">
                  <div className="sidebar-item">
                    <div className="sidebar-icon"></div>
                  </div>
                  <div className="sidebar-item">
                    <div className="sidebar-icon"></div>
                  </div>
                  <div className="sidebar-item">
                    <div className="sidebar-icon"></div>
                  </div>
                  <div className="sidebar-item">
                    <div className="sidebar-icon"></div>
                  </div>
                  <div className="sidebar-item">
                    <div className="sidebar-icon"></div>
                  </div>
                </div>

                {/* Main Content Area */}
                <div className="main-content">
                  {/* Vaultflow Header */}
                  <div className="content-header">
                    <div className="app-info">
                      <div className="app-icon">
                        <BarChart3 size={20} />
                      </div>
                      <span className="app-name">Vaultflow</span>
                      <button className="add-btn">
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Total Visits Section */}
                  <div>
                    <div className="visits-header">
                      <div className="visits-title">
                        <span className="visits-label">Total visits</span>
                        <div className="info-icon">?</div>
                      </div>
                      <div className="date-selector">
                        <span className="date-text">May 2023</span>
                        <div className="dropdown-icon">⌄</div>
                      </div>
                    </div>
                    
                    <div>
                      <span className="visits-number">20,342,952</span>
                      <p className="visits-date">May 2023</p>
                    </div>

                    {/* Chart Area */}
                    <div className="chart-container">
                      <svg className="chart-svg" viewBox="0 0 500 160" preserveAspectRatio="none">
                        <defs>
                          <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1" />
                          </linearGradient>
                          <pattern id="grid" width="50" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 50 0 L 0 0 0 20" fill="none" stroke="#374151" strokeWidth="0.5" opacity="0.3"/>
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                        <path
                          d="M 20,120 C 80,100 120,90 160,95 C 200,100 240,80 280,70 C 320,60 360,55 400,50 C 440,45 460,40 480,35"
                          stroke="#8B5CF6"
                          strokeWidth="2"
                          fill="none"
                        />
                        <path
                          d="M 20,120 C 80,100 120,90 160,95 C 200,100 240,80 280,70 C 320,60 360,55 400,50 C 440,45 460,40 480,35 L 480,160 L 20,160 Z"
                          fill="url(#areaGradient)"
                        />
                        <circle cx="280" cy="70" r="4" fill="white" stroke="#8B5CF6" strokeWidth="2" />
                      </svg>
                    </div>

                    {/* Legend */}
                    <div className="legend">
                      <div className="legend-item">
                        <div className="legend-header">
                          <div className="legend-dot purple"></div>
                          <span className="legend-label">Active</span>
                        </div>
                        <div className="legend-bar purple"></div>
                      </div>
                      <div className="legend-item">
                        <div className="legend-header">
                          <div className="legend-dot blue"></div>
                          <span className="legend-label">Idle</span>
                        </div>
                        <div className="legend-bar blue"></div>
                      </div>
                      <div className="legend-item">
                        <div className="legend-header">
                          <div className="legend-dot pink"></div>
                          <span className="legend-label">New</span>
                        </div>
                        <div className="legend-bar pink"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Sidebar */}
                <div className="right-sidebar">
                  {/* KPI Card */}
                  <div className="kpi-card">
                    <div className="kpi-label">Active Users</div>
                    <div className="kpi-value">4,612</div>
                  </div>
                  
                  {/* Mini Chart */}
                  <div className="mini-chart">
                    <div className="donut-chart">
                      <div className="donut-inner">75%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Section */}
        <div className="trust-section">
          <p className="trust-text">
            Trusted by teams at over 1,000 of the world's leading organizations
          </p>
          <div className="companies">
            <div className="company">DELL</div>
            <div className="company zendesk">zendesk</div>
            <div className="company rakuten">Rakuten</div>
            <div className="company pacific">🔷 PACIFIC FUNDS</div>
            <div className="company">NCR</div>
            <div className="company lattice">◊ Lattice</div>
            <div className="company ted">TED</div>
          </div>
        </div>

        {/* Meeting Insights Section */}
        <section className="meeting-insights-section">
          <div className="meeting-insights-container">
            {/* Header */}
            <div className="insights-header">
              <h3 className="insights-subtitle">Live meeting insights</h3>
              <h2 className="insights-title">
                Cluely helps you during meetings, so you can stay<br />
                focused on the conversation
              </h2>
            </div>

            {/* Laptop Mockup */}
            <div className="laptop-container">
  <div className="laptop">
    {/* Laptop Screen as Image */}
    <div className="laptop-screen-wrapper">
      <img 
        src={laptop1} 
        alt="Laptop screen showing AI assistant interface"
        className="laptop-screen-image"
      />
    </div>

    {/* Laptop Base */}
  </div>
</div>
          </div>

          {/* Background Elements */}
          <div className="insights-bg-elements">
            <div className="insights-blur-1"></div>
            <div className="insights-blur-2"></div>
          </div>
        </section>
        <section className="features-section">
          <div className="features-container">
            {/* Features Grid */}
            <div className="features-grid">
              {/* Live notetaking */}
              <div className="feature-card">
                <div className="feature-icon">
                  <MessageCircle size={24} />
                </div>
                <h3 className="feature-title">Live notetaking</h3>
                <p className="feature-description">
                  Our Analytics Dashboard provides a clear and intuitive interface 
                  for you to easily analyze your data. From customizable graphs to 
                  real-time data updates, our dashboard offers everything you 
                  need to gain valuable insights.
                </p>
                <button className="feature-link">View dashboard</button>
              </div>

              {/* Instant Answers */}
              <div className="feature-card">
                <div className="feature-icon">
                  <Download size={24} />
                </div>
                <h3 className="feature-title">Instant Answers</h3>
                <p className="feature-description">
                  Reward your customers and incentivize engagement with our 
                  innovative digital credit tokens. Our tokens can be customized to 
                  match your branding and are a flexible and scalable way to drive 
                  customer loyalty and encourage repeat business.
                </p>
                <button className="feature-link">View tokens</button>
              </div>

              {/* Real-time web search */}
              <div className="feature-card">
                <div className="feature-icon">
                  <MessageCircle size={24} />
                </div>
                <h3 className="feature-title">Real-time web search</h3>
                <p className="feature-description">
                  Our Analytics Dashboard provides a clear and intuitive interface 
                  for you to easily analyze your data. From customizable graphs to 
                  real-time data updates, our dashboard offers everything you 
                  need to gain valuable insights.
                </p>
                <button className="feature-link">View dashboard</button>
              </div>

              {/* Records your meetings */}
              <div className="feature-card">
                <div className="feature-icon">
                  <Download size={24} />
                </div>
                <h3 className="feature-title">Records your meetings</h3>
                <p className="feature-description">
                  Reward your customers and incentivize engagement with our 
                  innovative digital credit tokens. Our tokens can be customized to 
                  match your branding and are a flexible and scalable way to drive 
                  customer loyalty and encourage repeat business.
                </p>
                <button className="feature-link">View tokens</button>
              </div>

              {/* Code collaboration */}
              <div className="feature-card feature-card-large">
                <div className="feature-content">
                  <div className="feature-icon">
                    <MessageCircle size={24} />
                  </div>
                  <h3 className="feature-title">Code collaboration</h3>
                  <p className="feature-description">
                    Our advanced code synchronization technology ensures that 
                    your data is always up-to-date and accurate, no matter where it's 
                    coming from. Whether you're integrating data from multiple 
                    sources or working with a team of developers, our 
                    synchronization technology makes it easy to collaborate and 
                    ensure that your data is consistent and reliable.
                  </p>
                  <button className="feature-link">View code collaboration</button>
                </div>
                
                {/* Code Editor Mockup */}
                <div className="code-editor">
                  <div className="code-header">
                    <span className="code-title">DigitalToken.js</span>
                  </div>
                  <div className="code-content">
                    <div className="code-line">
                      <span className="line-number">1</span>
                      <span className="code-text">
                        <span className="keyword">function</span> <span className="function">addNumbersToTokens</span>(<span className="param">nums</span>) {'{'}
                      </span>
                    </div>
                    <div className="code-line">
                      <span className="line-number">2</span>
                      <span className="code-text">
                        &nbsp;&nbsp;<span className="keyword">let</span> <span className="variable">sum</span> = <span className="number">0</span>; <span className="variable">name</span>;
                      </span>
                    </div>
                    <div className="code-line">
                      <span className="line-number">3</span>
                      <span className="code-text">
                        &nbsp;&nbsp;<span className="keyword">for</span> <span className="variable">token</span> = {'{'}
                      </span>
                    </div>
                    <div className="code-line">
                      <span className="line-number">4</span>
                      <span className="code-text">
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">value</span>: <span className="string">sum</span>,
                      </span>
                    </div>
                    <div className="code-line">
                      <span className="line-number">5</span>
                      <span className="code-text">
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="property">value</span>: <span className="string">sum</span>,
                      </span>
                    </div>
                    <div className="code-line">
                      <span className="line-number">6</span>
                      <span className="code-text">
                        &nbsp;&nbsp;<span className="keyword">return</span> <span className="variable">token</span>;
                      </span>
                    </div>
                    <div className="code-line">
                      <span className="line-number">7</span>
                      <span className="code-text">
                        {'}'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Background Elements */}
          <div className="features-bg-elements">
            <div className="features-blur-1"></div>
            <div className="features-blur-2"></div>
          </div>
        </section>
      </main>

      {/* Background Elements */}
      <div className="bg-elements">
        <div className="bg-blur-1"></div>
        <div className="bg-blur-2"></div>
      </div>
      
    </div>
    
  );
}

export default Home;