function Courses({ skills, onExplore }) {
  return (
    <section className="courses-section" id="courses">

      <div className="section-heading">

        <p className="tagline">
          COURSES
        </p>

        <h2>
          Start Learning Today
        </h2>

        <p>
          Choose a learning path and build practical skills step by step.
        </p>

      </div>

      <div className="courses-container">

        {skills.map((skill) => (

          <div
            className="course-card"
            key={skill.title}
          >

            <div className="course-icon">
              {skill.icon}
            </div>

            <div className="course-info">

              <p className="course-label">
                COURSE
              </p>

              <h3>
                {skill.title}
              </h3>

              <p>
                {skill.description}
              </p>

              <div className="course-topics">

                {skill.topics.slice(0, 4).map(
                  (topic) => (
                    <span key={topic.title}>
                      {topic.title}
                    </span>
                  )
                )}

              </div>

              <button
                className="course-btn"
                onClick={() => onExplore(skill)}
              >
                Explore Course →
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Courses;