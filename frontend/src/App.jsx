import { useState, useEffect } from "react";
import "./App.css";


import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import SkillDetails from "./components/SkillDetails";
import LearningPath from "./components/LearningPath";
import Lesson from "./components/Lesson";
import skills from "./data/skills";
import Courses from "./components/Courses";
import About from "./components/About";
import Progress from "./components/Progress";
import Login from "./components/Login";
import Signup from "./components/SignUp";
import Resume from "./components/Resume";
import AITest from "./components/AITest";


function App() {
  const [selectedSkill, setSelectedSkill] = useState(null);
  const [learningSkill, setLearningSkill] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showResume, setShowResume] = useState(false);

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
      <Navbar
  onHome={() => {
    setSelectedSkill(null);
    setLearningSkill(null);
    setSelectedTopic(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }}
  onSkills={() => {
    setSelectedSkill(null);
    setLearningSkill(null);
    setSelectedTopic(null);

    setTimeout(() => {
      document
        .getElementById("skills")
        ?.scrollIntoView({
          behavior: "smooth",
        });
    }, 50);
  }}
  onCourses={() => {
  setSelectedSkill(null);
  setLearningSkill(null);
  setSelectedTopic(null);

  setTimeout(() => {
    document
      .getElementById("courses")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }, 50);
}}
onProgress={() => {
  setSelectedSkill(null);
  setLearningSkill(null);
  setSelectedTopic(null);

  setTimeout(() => {
    document
      .getElementById("progress")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }, 50);
}}
onResume={() => {
  setSelectedSkill(null);
  setLearningSkill(null);
  setSelectedTopic(null);
  setShowLogin(false);
  setShowSignup(false);
  setShowResume(true);
}}

  onAbout={() => {
  setSelectedSkill(null);
  setLearningSkill(null);
  setSelectedTopic(null);

  setTimeout(() => {
    document
      .getElementById("about")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  }, 50);
}}

  onLogin={() => {
    setSelectedSkill(null);
    setLearningSkill(null);
    setSelectedTopic(null);
    setShowLogin(true);
  }}
/>

      {/* LESSON PAGE */}
   {showLogin ? (

  <Login
    onBack={() => {
      setShowLogin(false);
      setSelectedSkill(null);
      setLearningSkill(null);
      setSelectedTopic(null);

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }}

    onSignup={() => {
      setShowLogin(false);
      setShowSignup(true);
    }}
  />

) : showSignup ? (

  <Signup
    onBack={() => setShowSignup(false)}
    onLogin={() => {
      setShowSignup(false);
      setShowLogin(true);
    }}
  />

  ) : showResume ? (

  <Resume
  onExploreSkill={(skillTitle) => {
    const matchedSkill = skills.find(
      (skill) =>
        skill.title.toLowerCase() === skillTitle.toLowerCase()
    );

    if (matchedSkill) {
      setShowResume(false);
      setSelectedSkill(matchedSkill);
      setLearningSkill(null);
      setSelectedTopic(null);
    }
  }}
/>


) : selectedTopic ? (

  <Lesson
    selectedTopic={selectedTopic}
    learningSkill={learningSkill}
    completedTopics={completedTopics}
    onBack={closeLesson}
    onComplete={(topic) => {
      toggleTopic(topic);
      closeLesson();
    }}
  />

) : learningSkill ? (

  <LearningPath
    learningSkill={learningSkill}
    completedTopics={completedTopics}
    progress={progress}
    completed={completed}
    total={total}
    onBack={backToDetails}
    onOpenTopic={openTopic}
  />

) : (

        /* HOME PAGE */

        <>

          <Hero
  onExploreSkills={() => {
    setSelectedSkill(null);
    setLearningSkill(null);
    setSelectedTopic(null);

    setTimeout(() => {
      document
        .getElementById("skills")
        ?.scrollIntoView({
          behavior: "smooth",
        });
    }, 50);
  }}

  onLearnMore={() => {
    setTimeout(() => {
      document
        .getElementById("about")
        ?.scrollIntoView({
          behavior: "smooth",
        });
    }, 50);
  }}
/> 

<AITest />

          <Skills
  skills={skills}
  onExplore={openSkill}
/>
  <Courses
  skills={skills}
  onExplore={openSkill}
/>
<Progress
  skills={skills}
  completedTopics={completedTopics}
/>


<About />

          {selectedSkill && (
  <SkillDetails
    skill={selectedSkill}
    onClose={() => setSelectedSkill(null)}
    onStart={startLearning}
  />
)}
        </>

      )}

    </div>
  );
}

export default App;