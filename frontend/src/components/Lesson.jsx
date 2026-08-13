function Lesson({
  selectedTopic,
  learningSkill,
  completedTopics,
  onBack,
  onComplete,
}) {
  const isCompleted =
    completedTopics[learningSkill.title]?.includes(
      selectedTopic.title
    );

  return (
    <section className="lesson-section">

      <div className="lesson-container">

        <button
          className="back-btn"
          onClick={onBack}
        >
          ← Back to Learning Path
        </button>

        <div className="lesson-card">

          <p className="tagline">
            LESSON
          </p>

          <h1>
            {selectedTopic.title}
          </h1>

          <p className="lesson-subtitle">
            {selectedTopic.description}
          </p>

          <div className="lesson-content">

            <h2>
              What is {selectedTopic.title}?
            </h2>

            <p>
              {selectedTopic.content}
            </p>

            <h2>
              Example
            </h2>

            <pre>
              <code>
                {selectedTopic.example}
              </code>
            </pre>

          </div>

          <div className="lesson-actions">

            <button
              className="secondary-btn"
              onClick={onBack}
            >
              ← Back
            </button>

            <button
              className="complete-btn"
              onClick={() => onComplete(selectedTopic)}
            >
              {isCompleted
                ? "✓ Completed"
                : "Mark Complete →"}
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Lesson;