import { ArrowRight, ClipboardCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">

        {/* Left Content */}
        <div className="hero-left">

          {/* Badge */}
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            RSU MENTAL HEALTH CAMPAIGN 2026
          </div>

          {/* Heading */}
          <h1 className="hero-heading">
            Are you{" "}
            <span className="hero-heading-accent">
              <em>really okay?</em>
            </span>{" "}
          
          </h1>

          {/* Subtext */}
          <p className="hero-subtext">
            Mental health struggles are real, valid, and treatable.
            Whether you're feeling overwhelmed, anxious, or simply
            not yourself — reaching out is the bravest thing you can
            do. We're here with you.
          </p>

          {/* Buttons */}
          <div className="hero-buttons">
            <a href="#clinics" className="btn-primary hero-btn-main">
              Find Help Near You
              <ArrowRight size={18} />
            </a>
            <a href="#resources" className="btn-outline hero-btn-secondary">
              <ClipboardCheck size={18} />
              Take a Self-Check
            </a>
          </div>
        </div>

        {/* Right Cards */}
        <div className="hero-right">

          {/* Quote Card */}
          <div className="hero-card hero-card-quote">
            <div className="hero-card-icon">💬</div>
            <p className="hero-quote-text">
              "The moment I asked for help was the moment things
              started to get better."
            </p>
            <p className="hero-quote-author">RSU Student, 2025</p>
          </div>

          {/* Stat Card 1 */}
          <div className="hero-card hero-card-stat hero-card-green">
            <p className="hero-stat-number">1 in 5</p>
            <p className="hero-stat-label">
              PEOPLE EXPERIENCE MENTAL HEALTH CHALLENGES EACH YEAR
            </p>
          </div>

          {/* Stat Card 2 */}
          <div className="hero-card hero-card-stat hero-card-light">
            <p className="hero-stat-number hero-stat-teal">76%</p>
            <p className="hero-stat-label">
              FEEL BETTER AFTER SEEKING PROFESSIONAL HELP
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}