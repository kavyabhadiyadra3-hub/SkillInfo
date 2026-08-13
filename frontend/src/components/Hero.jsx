function Hero({ onExploreSkills, onLearnMore }) {
  return (
    <main className="hero">
      <div className="hero-content">

        <p className="tagline">
          LEARN • BUILD • GROW
        </p>

        <h1>
          Build Skills.
          <br />
          Build Your <span>Future.</span>
        </h1>

        <p className="description">
          Discover the right skills, learn from quality
          resources, and build your career one step at a time.
        </p>

        <div className="buttons">

          <button
            className="primary-btn"
            onClick={onExploreSkills}
          >
            Explore Skills →
          </button>

          <button
            className="secondary-btn"
            onClick={onLearnMore}
          >
            Learn More
          </button>

        </div>

      </div>
    </main>
  );
}

export default Hero;