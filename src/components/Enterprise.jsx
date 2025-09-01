import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Headphones, MessageSquare, BarChart3 } from 'lucide-react';

const EnterpriseDashboard = () => {
  const [chartData, setChartData] = useState([]);
  
  useEffect(() => {
    // Simulate animated chart data
    const generateChartData = () => {
      return Array.from({ length: 20 }, (_, i) => ({
        height: Math.random() * 80 + 20,
        delay: i * 0.1
      }));
    };
    
    setChartData(generateChartData());
    
    const interval = setInterval(() => {
      setChartData(generateChartData());
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <TrendingUp className="icon" />,
      title: "Analytics",
      description: "Advanced analytics and reporting tools for deep insights into your business performance."
    },
    {
      icon: <Users className="icon" />,
      title: "Recruiting",
      description: "Streamline your hiring process with AI-powered candidate matching and assessment tools."
    },
    {
      icon: <MessageSquare className="icon" />,
      title: "Consulting",
      description: "Expert consulting services to optimize your business processes and strategy."
    },
    {
      icon: <Headphones className="icon" />,
      title: "Customer Support",
      description: "24/7 premium support with dedicated account managers for enterprise clients."
    }
  ];

  return (
    <div className="container">
      <div className="wrapper">
        {/* Header Section */}
        <div className="header">
          <div className="badge">
            Enterprise
          </div>
          <h1 className="main-title">
            Imagine everyone knew as much<br />
            about your company as you.
          </h1>
          <p className="subtitle">
            Unlock the full potential of your enterprise with our comprehensive dashboard solution.
          </p>
        </div>

        {/* Laptop Mockup Section */}
        <div className="laptop-section">
          <div className="laptop">
            <div className="laptop-screen">
              <div className="screen-content">
                <div className="screen-header">
                  <h2 className="screen-title">Enterprise</h2>
                  <div className="api-indicator">API</div>
                </div>
                
                <div className="dashboard">
                  <div className="sidebar">
                    <div className="sidebar-item">
                      <BarChart3 className="sidebar-icon" />
                    </div>
                    <div className="sidebar-item">
                      <TrendingUp className="sidebar-icon" />
                    </div>
                    <div className="sidebar-item">
                      <Users className="sidebar-icon" />
                    </div>
                  </div>
                  
                  <div className="chart-area">
                    <div className="stats-row">
                      <div>
                        <div className="stat-number">30,342,502</div>
                        <div className="stat-label">Total Users</div>
                      </div>
                    </div>
                    
                    <div className="chart-container">
                      <div className="waveform">
                        {chartData.map((bar, index) => (
                          <div
                            key={index}
                            className="chart-bar"
                            style={{
                              height: `${bar.height}%`,
                              animationDelay: `${bar.delay}s`
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="laptop-base"></div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bottom-section">
          <h3 className="bottom-title">
            Imagine everyone knew as much about your<br />
            company as you.
          </h3>
          
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h4 className="feature-title">{feature.title}</h4>
                <p className="feature-desc">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .container {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f0f23 0%, #1a1a3a 50%, #2d1b69 100%);
          color: white;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 80px 20px;
        }

        .header {
          text-align: center;
          margin-bottom: 80px;
          position: relative;
        }

        .badge {
          display: inline-block;
          background: linear-gradient(45deg, #6366f1, #8b5cf6);
          color: white;
          padding: 12px 24px;
          border-radius: 25px;
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 30px;
          box-shadow: 0 0 30px rgba(99, 102, 241, 0.4);
          animation: glow 2s ease-in-out infinite alternate;
        }

        @keyframes glow {
          from { box-shadow: 0 0 30px rgba(99, 102, 241, 0.4); }
          to { box-shadow: 0 0 40px rgba(99, 102, 241, 0.6); }
        }

        .main-title {
          font-size: 4rem;
          font-weight: 700;
          margin-bottom: 30px;
          background: linear-gradient(135deg, #ffffff 0%, #e5e7eb 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.1;
        }

        .subtitle {
          font-size: 1.25rem;
          color: #d1d5db;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .laptop-section {
          display: flex;
          justify-content: center;
          margin-bottom: 100px;
          perspective: 1000px;
        }

        .laptop {
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.7s ease-out;
        }

        .laptop:hover {
          transform: scale(1.05) rotateY(5deg);
        }

        .laptop-screen {
          width: 400px;
          height: 280px;
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
          border-radius: 20px 20px 8px 8px;
          margin: 0 auto;
          position: relative;
          overflow: hidden;
          border: 3px solid #374151;
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.5),
            0 0 60px rgba(139, 92, 246, 0.2);
        }

        .laptop-base {
          width: 420px;
          height: 20px;
          background: linear-gradient(135deg, #6b7280 0%, #4b5563 100%);
          border-radius: 0 0 15px 15px;
          margin: 0 auto;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
        }

        .screen-content {
          position: absolute;
          inset: 20px;
        }

        .screen-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 25px;
        }

        .screen-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: white;
        }

        .api-indicator {
          background: linear-gradient(45deg, #8b5cf6, #6366f1);
          color: white;
          padding: 6px 12px;
          border-radius: 15px;
          font-size: 12px;
          font-weight: 600;
          box-shadow: 0 0 15px rgba(139, 92, 246, 0.5);
        }

        .dashboard {
          position: relative;
          height: 180px;
        }

        .sidebar {
          position: absolute;
          left: 0;
          top: 0;
          width: 50px;
          background: rgba(55, 65, 81, 0.6);
          border-radius: 12px;
          padding: 15px 8px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          backdrop-filter: blur(10px);
        }

        .sidebar-item {
          width: 32px;
          height: 32px;
          background: linear-gradient(45deg, #8b5cf6, #6366f1);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.3s ease;
          box-shadow: 0 4px 12px rgba(139, 92, 246, 0.3);
        }

        .sidebar-item:hover {
          transform: scale(1.1);
        }

        .sidebar-icon {
          width: 16px;
          height: 16px;
          color: white;
        }

        .chart-area {
          margin-left: 70px;
          margin-top: 10px;
        }

        .stats-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .stat-number {
          font-size: 1.8rem;
          font-weight: 700;
          color: white;
          background: linear-gradient(45deg, #ffffff, #e5e7eb);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .stat-label {
          font-size: 0.75rem;
          color: #9ca3af;
          margin-top: 4px;
        }

        .chart-container {
          height: 100px;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(99, 102, 241, 0.2));
          border-radius: 12px;
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
        }

        .waveform {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 100%;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          gap: 2px;
          padding: 10px;
        }

        .chart-bar {
          width: 6px;
          background: linear-gradient(to top, #8b5cf6, #6366f1);
          border-radius: 3px 3px 0 0;
          transition: height 1s ease-out;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }

        .bottom-section {
          text-align: center;
          margin-bottom: 60px;
        }

        .bottom-title {
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 60px;
          color: #f3f4f6;
          line-height: 1.3;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          max-width: 1000px;
          margin: 0 auto;
        }

        .feature-card {
          background: linear-gradient(135deg, rgba(30, 41, 59, 0.6), rgba(139, 92, 246, 0.1));
          padding: 40px 30px;
          border-radius: 20px;
          border: 1px solid rgba(139, 92, 246, 0.2);
          transition: all 0.4s ease;
          backdrop-filter: blur(10px);
          text-align: center;
        }

        .feature-card:hover {
          transform: translateY(-10px) scale(1.02);
          border-color: rgba(139, 92, 246, 0.4);
          box-shadow: 0 20px 40px rgba(139, 92, 246, 0.2);
        }

        .feature-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(45deg, #8b5cf6, #6366f1);
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          box-shadow: 0 8px 25px rgba(139, 92, 246, 0.4);
        }

        .icon {
          width: 24px;
          height: 24px;
          color: white;
        }

        .feature-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 15px;
          color: white;
        }

        .feature-desc {
          font-size: 0.95rem;
          color: #d1d5db;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .wrapper {
            padding: 40px 15px;
          }

          .main-title {
            font-size: 2.5rem;
          }

          .laptop-screen {
            width: 320px;
            height: 220px;
          }

          .laptop-base {
            width: 340px;
          }

          .features-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default EnterpriseDashboard;