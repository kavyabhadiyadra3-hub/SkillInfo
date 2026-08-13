function Skills({ skills, onExplore }) {
  return (
    <section className="skills-section" id="skills">

      <div className="section-heading">

        <p className="tagline">
          EXPLORE
        </p>

        <h2>
          Choose Your Skill
        </h2>

        <p>
          Start learning something new and take your skills
          to the next level.
        </p>

      </div>

      <div className="skills-container">

        {skills.map((skill) => (

          <div
            className="skill-card"
            key={skill.title}
          >

            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3>
              {skill.title}
            </h3>

            <p>
              {skill.description}
            </p>

            <button
              onClick={() => onExplore(skill)}
            >
              Explore →
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;