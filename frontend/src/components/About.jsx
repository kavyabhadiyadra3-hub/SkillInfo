function About() {
  return (
    <section className="about-section" id="about">

      <div className="about-content">

        <p className="about-tag">
          ABOUT SKILLINFO
        </p>

        <h2>
          Learn Skills. Build Your Future.
        </h2>

        <p className="about-description">
          SkillInfo is a learning platform designed to help students
          discover useful technical skills and learn them through
          structured learning paths.
        </p>

        <div className="about-cards">

          <div className="about-card">
            <h3>📚 Structured Learning</h3>
            <p>
              Learn topics step by step instead of jumping randomly
              between resources.
            </p>
          </div>

          <div className="about-card">
            <h3>🎯 Track Your Progress</h3>
            <p>
              Mark topics as completed and keep track of your learning
              progress.
            </p>
          </div>

          <div className="about-card">
            <h3>💻 Practical Skills</h3>
            <p>
              Explore skills that can help you build projects and
              prepare for your career.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;