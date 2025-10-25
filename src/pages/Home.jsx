import React from "react";
import ArticleList from "../Components/articles/ArticleList";
import "./Home.css";
import { useNavigate } from "react-router";
export default function Home() {

const navigate = useNavigate()

 const handlenNavigation = () => {
    navigate('/articles');
  };
  return (
    <div>
   
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to NC News</h1>
          <p className="hero-subtitle">
            Your source for the latest stories, insights, and updates
          </p>
          <button onClick={handlenNavigation} className="cta-button">Explore Articles</button>
        </div>

        <div className="stats-container">
          <div className="stat-card">
            <h3 className="stat-number">500+</h3>
            <p className="stat-label">Articles</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">10K+</h3>
            <p className="stat-label">Readers</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">50+</h3>
            <p className="stat-label">Writers</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number">1K+</h3>
            <p className="stat-label">Comments</p>
          </div>
        </div>
      </section>
    </div>
  );
}
