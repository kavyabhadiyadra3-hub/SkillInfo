import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [learningSkill, setLearningSkill] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);

  const [completedTopics, setCompletedTopics] = useState(() => {
    const savedProgress = localStorage.getItem("skillInfoProgress");
    return savedProgress ? JSON.parse(savedProgress) : {};
  });

  useEffect(() => {
    localStorage.setItem(
      "skillInfoProgress",
      JSON.stringify(completedTopics)
    );
  }, [completedTopics]);

  const skills = [
    {
      icon: "💻",
      title: "Web Development",
      description:
        "Learn HTML, CSS, JavaScript, React and build modern websites.",
      topics: [
        {
          title: "HTML",
          description: "Learn the structure of webpages.",
          content:
            "HTML (HyperText Markup Language) is used to create the structure of webpages. It defines headings, paragraphs, images, links, buttons and other elements.",
          example: "<h1>Hello World</h1>",
        },
        {
          title: "CSS",
          description: "Learn how to style webpages.",
          content:
            "CSS (Cascading Style Sheets) controls how HTML elements look. You can use CSS to change colors, spacing, fonts, layouts and animations.",
          example: "h1 {\n  color: blue;\n}",
        },
        {
          title: "JavaScript",
          description: "Learn programming for the web.",
          content:
            "JavaScript makes webpages interactive. It can respond to clicks, change content, handle forms and communicate with servers.",
          example: 'console.log("Hello World");',
        },
        {
          title: "React",
          description: "Build modern user interfaces.",
          content:
            "React is a JavaScript library for building user interfaces using reusable components and state.",
          example:
            "function App() {\n  return <h1>Hello React</h1>;\n}",
        },
      ],
    },

    {
      icon: "🧠",
      title: "Data Structures",
      description:
        "Master arrays, trees, graphs, algorithms and problem solving.",
      topics: [
        {
          title: "Arrays",
          description: "Store and access collections of data.",
          content:
            "An array stores multiple values in a single structure. Elements can be accessed using their index.",
          example: "int numbers[] = {10, 20, 30};",
        },
        {
          title: "Linked Lists",
          description: "Learn dynamic data structures.",
          content:
            "A linked list consists of nodes where each node stores data and a reference to another node.",
          example: "Node → Node → Node",
        },
        {
          title: "Trees",
          description: "Understand hierarchical data.",
          content:
            "A tree is a hierarchical data structure consisting of nodes connected by edges.",
          example: "       10\n      /  \\\n     5   15",
        },
        {
          title: "Graphs",
          description: "Represent relationships between objects.",
          content:
            "Graphs consist of vertices and edges and can represent networks, maps and relationships.",
          example: "A → B → C",
        },
        {
          title: "Algorithms",
          description: "Solve problems efficiently.",
          content:
            "Algorithms are step-by-step procedures used to solve computational problems efficiently.",
          example: "Input → Process → Output",
        },
      ],
    },

    {
      icon: "🤖",
      title: "AI & Machine Learning",
      description:
        "Explore Python, machine learning and artificial intelligence.",
      topics: [
        {
          title: "Python",
          description: "Learn Python fundamentals.",
          content:
            "Python is a popular programming language widely used in AI, data science and automation.",
          example: 'print("Hello AI")',
        },
        {
          title: "NumPy",
          description: "Work with numerical data.",
          content:
            "NumPy provides powerful tools for numerical computing and working with arrays in Python.",
          example: "import numpy as np",
        },
        {
          title: "Machine Learning",
          description: "Teach computers to learn from data.",
          content:
            "Machine learning allows computers to learn patterns from data and make predictions or decisions.",
          example: "Data → Model → Prediction",
        },
        {
          title: "Deep Learning",
          description: "Explore neural networks.",
          content:
            "Deep learning uses neural networks with multiple layers to learn complex patterns.",
          example: "Input → Neural Network → Output",
        },
      ],
    },

    {
      icon: "🔐",
      title: "Cybersecurity",
      description:
        "Learn about networks, security, ethical hacking and protecting systems.",
      topics: [
        {
          title: "Networking",
          description: "Understand computer networks.",
          content:
            "Networking is the process of connecting computers and devices so they can communicate and share resources.",
          example: "Computer → Router → Internet",
        },
        {
          title: "Linux",
          description: "Learn the Linux operating system.",
          content:
            "Linux is an open-source operating system widely used in servers, cybersecurity and development.",
          example: "ls\ncd folder\npwd",
        },
        {
          title: "Web Security",
          description: "Protect web applications.",
          content:
            "Web security focuses on protecting websites and applications from vulnerabilities and unauthorized access.",
          example: "Input → Validation → Secure Application",
        },
        {
          title: "Ethical Hacking",
          description: "Learn authorized security testing.",
          content:
            "Ethical hacking involves testing systems with permission to identify and fix security weaknesses.",
          example: "Find vulnerability → Report → Fix",
        },
      ],
    },

    {
      icon: "📱",
      title: "App Development",
      description:
        "Learn how to create useful and beautiful mobile applications.",
      topics: [
        {
          title: "Flutter",
          description: "Build cross-platform applications.",
          content:
            "Flutter is a framework for building applications for multiple platforms using Dart.",
          example: "Widget → Screen → App",
        },
        {
          title: "React Native",
          description: "Build mobile apps using React.",
          content:
            "React Native allows developers to build mobile applications using JavaScript and React.",
          example: "<View>\n  <Text>Hello</Text>\n</View>",
        },
        {
          title: "Android",
          description: "Develop Android applications.",
          content:
            "Android development involves building applications for devices running the Android operating system.",
          example: "Activity → Layout → User",
        },
        {
          title: "APIs",
          description: "Connect applications with services.",
          content:
            "APIs allow different software systems to communicate and exchange data.",
          example: "App → API → Server",
        },
      ],
    },

    {
      icon: "🎨",
      title: "UI/UX Design",
      description:
        "Design attractive, simple and user-friendly digital experiences.",
      topics: [
        {
          title: "Figma",
          description: "Create digital designs.",
          content:
            "Figma is a collaborative design tool used to create interfaces, prototypes and design systems.",
          example: "Design → Prototype → Test",
        },
        {
          title: "Wireframes",
          description: "Plan interface layouts.",
          content:
            "Wireframes are simple visual representations of a webpage or application's structure.",
          example: "Header → Content → Footer",
        },
        {
          title: "Prototyping",
          description: "Create interactive designs.",
          content:
            "Prototypes simulate how an interface will behave before it is fully developed.",
          example: "Screen A → Button → Screen B",
        },
        {
          title: "User Research",
          description: "Understand your users.",
          content:
            "User research helps designers understand users' needs, problems and behaviors.",
          example: "Research → Design → Test → Improve",
        },
      ],
    },
  ];

  const openSkill = (skill) => {
    setSelectedSkill(skill);
    setSelectedTopic(null);
  };

  const startLearning = () => {
    setLearningSkill(selectedSkill);
    setSelectedSkill(null);
  };

  const backToDetails = () => {
    setSelectedSkill(learningSkill);
    setLearningSkill(null);
    setSelectedTopic(null);
  };

  const openTopic = (topic) => {
    setSelectedTopic(topic);
  };

  const closeLesson = () => {
    setSelectedTopic(null);
  };

  const toggleTopic = (topic) => {
    const skillTitle = learningSkill.title;

    setCompletedTopics((previous) => {
      const currentCompleted = previous[skillTitle] || [];

      const alreadyCompleted = currentCompleted.includes(topic.title);

      return {
        ...previous,
        [skillTitle]: alreadyCompleted
          ? currentCompleted.filter((item) => item !== topic.title)
          : [...currentCompleted, topic.title],
      };
    });
  };

  const completed =
    learningSkill && completedTopics[learningSkill.title]
      ? completedTopics[learningSkill.title].length
      : 0;

  const total = learningSkill ? learningSkill.topics.length : 0;

  const progress =
    total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <h2>SkillInfo</h2>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#skills">Skills</a>
          <a href="#details">Courses</a>
          <a href="#">About</a>
        </div>

        <button className="login-btn">Login</button>
      </nav>

      {/* LESSON PAGE */}
      {selectedTopic ? (

        <section className="lesson-section">

          <div className="lesson-container">

            <button
              className="back-btn"
              onClick={closeLesson}
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
                  onClick={closeLesson}
                >
                  ← Back
                </button>

                <button
                  className="complete-btn"
                  onClick={() => {
                    toggleTopic(selectedTopic);
                    closeLesson();
                  }}
                >
                  {completedTopics[learningSkill.title]?.includes(
                    selectedTopic.title
                  )
                    ? "✓ Completed"
                    : "Mark Complete →"}
                </button>

              </div>

            </div>

          </div>

        </section>

      ) : learningSkill ? (

        /* LEARNING PAGE */

        <section className="learning-section">

          <div className="learning-container">

            <button
              className="back-btn"
              onClick={backToDetails}
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

              {/* Topics */}

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
                              openTopic(topic)
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

              {/* Resources */}

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
                            openTopic(topic)
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

      ) : (

        /* HOME PAGE */

        <>

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

                <a
                  href="#skills"
                  className="primary-btn"
                >
                  Explore Skills →
                </a>

                <button className="secondary-btn">
                  Learn More
                </button>

              </div>

            </div>

          </main>

          <section
            className="skills-section"
            id="skills"
          >

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
                    onClick={() =>
                      openSkill(skill)
                    }
                  >
                    Explore →
                  </button>

                </div>

              ))}

            </div>

          </section>

          {selectedSkill && (

            <section
              className="details-section"
              id="details"
            >

              <div className="details-card">

                <button
                  className="close-btn"
                  onClick={() =>
                    setSelectedSkill(null)
                  }
                >
                  ✕
                </button>

                <div className="details-icon">
                  {selectedSkill.icon}
                </div>

                <p className="tagline">
                  SKILL DETAILS
                </p>

                <h2>
                  {selectedSkill.title}
                </h2>

                <p className="details-description">
                  {selectedSkill.description}
                </p>

                <h3>
                  What you will learn
                </h3>

                <div className="topics">

                  {selectedSkill.topics.map(
                    (topic) => (

                      <span key={topic.title}>
                        {topic.title}
                      </span>

                    )
                  )}

                </div>

                <button
                  className="start-btn"
                  onClick={startLearning}
                >
                  Start Learning →
                </button>

              </div>

            </section>

          )}

        </>

      )}

    </div>
  );
}

export default App;