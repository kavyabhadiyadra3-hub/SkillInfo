function LearningPath({
  learningSkill,
  completedTopics,
  progress,
  completed,
  total,
  onBack,
  onOpenTopic,
}) {
  return (
    <section className="learning-section">

      <div className="learning-container">

        <button
          className="back-btn"
          onClick={onBack}
        >
          ← Back to Skill
        </button>

        <div className="learning-header">

          <div className="learning-title">

            <div className="learning-icon">
              {learningSkill.icon}
            </div>

            <div>
              <p className="tagline">
                LEARNING PATH
              </p>

              <h1>
                {learningSkill.title}
              </h1>

              <p>
                Follow this roadmap and build your skills step by step.
              </p>
            </div>

          </div>

          <div className="progress-card">

            <div className="progress-top">
              <span>Your Progress</span>

              <strong>
                {progress}%
              </strong>
            </div>

            <div className="progress-bar">

              <div
                className="progress-fill"
                style={{
                  width: `${progress}%`,
                }}
              ></div>

            </div>

            <p>
              {completed} of {total} topics completed
            </p>

          </div>

        </div>

        <div className="learning-content">

          {/* Learning Roadmap */}

          <div className="topics-panel">

            <h2>
              Learning Roadmap
            </h2>

            <p className="panel-subtitle">
              Select a topic to start learning.
            </p>

            <div className="learning-topics">

              {learningSkill.topics.map(
                (topic, index) => {

                  const isCompleted =
                    completedTopics[
                      learningSkill.title
                    ]?.includes(topic.title);

                  return (
                    <div
                      className={`learning-topic ${
                        isCompleted
                          ? "completed-topic"
                          : ""
                      }`}
                      key={topic.title}
                    >

                      <div className="topic-number">
                        {isCompleted
                          ? "✓"
                          : index + 1}
                      </div>

                      <div className="topic-info">

                        <h3>
                          {topic.title}
                        </h3>

                        <p>
                          {topic.description}
                        </p>

                      </div>

                      <button
                        className="topic-btn"
                        onClick={() =>
                          onOpenTopic(topic)
                        }
                      >
                        {isCompleted
                          ? "Review"
                          : "Start"}
                      </button>

                    </div>
                  );
                }
              )}

            </div>

          </div>

          {/* Learning Resources */}

          <div className="resources-panel">

            <h2>
              Learning Resources
            </h2>

            <p className="panel-subtitle">
              Recommended resources for your journey.
            </p>

            <div className="resource-list">

              {learningSkill.topics.map(
                (topic) => (

                  <div
                    className="resource-card"
                    key={topic.title}
                  >

                    <div>

                      <span className="resource-type">
                        LESSON
                      </span>

                      <h3>
                        {topic.title}
                      </h3>

                      <p>
                        {topic.description}
                      </p>

                    </div>

                    <button
                      onClick={() =>
                        onOpenTopic(topic)
                      }
                    >
                      Open →
                    </button>

                  </div>

                )
              )}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default LearningPath;