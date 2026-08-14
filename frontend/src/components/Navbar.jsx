function Navbar({ 
  onHome, 
  onSkills, 
  onCourses, 
  onProgress, 
  onResume,
  onAbout, 
  onLogin 
}) {
  return (
    <nav className="navbar">

      <h2
        onClick={onHome}
        style={{ cursor: "pointer" }}
      >
        SkillInfo
      </h2>

      <div className="nav-links">

        <button type="button" onClick={onHome}>
          Home
        </button>

        <button type="button" onClick={onSkills}>
          Skills
        </button>

        <button type="button" onClick={onCourses}>
          Courses
        </button>

        <button type="button" onClick={onProgress}>
          Progress
        </button>

        <button onClick={onResume}>
  Resume
</button>

        <button type="button" onClick={onAbout}>
          About
        </button>

      </div>
<button
  type="button"
  className="login-btn"
  onClick={() => {
    console.log("LOGIN BUTTON CLICKED");
    onLogin();
  }}
>
  Login
</button>

    </nav>
  );
}

export default Navbar;