function Signup({ onBack, onLogin }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Account created successfully!");
  };

  return (
    <section className="login-section">

      <div className="login-card">

        <button
          type="button"
          className="back-btn"
          onClick={onBack}
        >
          ← Back
        </button>

        <div className="login-header">
          <p className="tagline">
            GET STARTED
          </p>

          <h1>
            Create Account
          </h1>

          <p>
            Start your learning journey with SkillInfo.
          </p>
        </div>

        <form onSubmit={handleSubmit}>

          <label htmlFor="name">
            Full Name
          </label>

          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="signup-email">
            Email
          </label>

          <input
            id="signup-email"
            type="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="signup-password">
            Password
          </label>

          <input
            id="signup-password"
            type="password"
            placeholder="Create a password"
            required
          />

          <button
            type="submit"
            className="login-submit-btn"
          >
            Create Account →
          </button>

        </form>

        <p className="login-note">
          Already have an account?{" "}
          <button
            type="button"
            className="signup-link"
            onClick={onLogin}
          >
            Login
          </button>
        </p>

      </div>

    </section>
  );
}

export default Signup;