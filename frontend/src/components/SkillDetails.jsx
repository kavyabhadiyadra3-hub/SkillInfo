function SkillDetails({ skill, onClose, onStart }) {
  return (
    <section
      className="details-section"
      id="details"
    >
      <div className="details-card">

        <button
          className="close-btn"
          onClick={onClose}
        >
          ✕
        </button>

        <div className="details-icon">
          {skill.icon}
        </div>

        <p className="tagline">
          SKILL DETAILS
        </p>

        <h2>
          {skill.title}
        </h2>

        <p className="details-description">
          {skill.description}
        </p>

        <h3>
          What you will learn
        </h3>

        <div className="topics">

          {skill.topics.map((topic) => (
            <span key={topic.title}>
              {topic.title}
            </span>
          ))}

        </div>

        <button
          className="start-btn"
          onClick={onStart}
        >
          Start Learning →
        </button>

      </div>
    </section>
  );
}

export default SkillDetails;