function Progress({ skills, completedTopics }) {
  return (
    <section className="progress-section" id="progress">

      <div className="section-heading">
        <p className="tagline">YOUR PROGRESS</p>

        <h2>Keep Learning 🚀</h2>

        <p>
          Track your progress across all your learning paths.
        </p>
      </div>

      <div className="progress-container">

        {skills.map((skill) => {
          const completed =
            completedTopics[skill.title]?.length || 0;

          const total = skill.topics.length;

          const percentage =
            total > 0
              ? Math.round((completed / total) * 100)
              : 0;

          return (
            <div
              className="progress-card"
              key={skill.title}
            >

              <div className="progress-header">

                <h3>{skill.title}</h3>

                <span>
                  {percentage}%
                </span>

              </div>

              <div className="progress-bar">

                <div
                  className="progress-fill"
                  style={{
                    width: `${percentage}%`,
                  }}
                />

              </div>

              <p>
                {completed} of {total} topics completed
              </p>

            </div>
          );
        })}

      </div>

    </section>
  );
}

export default Progress;