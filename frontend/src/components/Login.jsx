function Login({ onBack, onSignup }) {
  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Login functionality will be connected to the backend later.");
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
            WELCOME BACK
          </p>

          <h1>
            Login to SkillInfo
          </h1>

          <p>
            Continue your learning journey.
          </p>
        </div>

        <form onSubmit={handleSubmit}>

          <label htmlFor="email">
            Email
          </label>

          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            required
          />

          <label htmlFor="password">
            Password
          </label>

          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            required
          />

          <button
            type="submit"
            className="login-submit-btn"
          >
            Login →
          </button>

        </form>

        <p className="login-note">
  Don't have an account?{" "}
  <button
  type="button"
  className="signup-link"
  onClick={onSignup}
>
  Sign Up
</button>
</p>

      </div>

    </section>
  );
}

export default Login;