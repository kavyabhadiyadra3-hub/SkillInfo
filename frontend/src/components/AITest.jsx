import { useState } from "react";

function AITest() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {
    if (!message.trim()) return;

    setLoading(true);
    setReply("");

    try {
      const response = await fetch("https://skillinfo.onrender.com/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
  console.error("Backend AI error:", data);
  throw new Error(data.error || "AI request failed");
}

      setReply(data.reply);
    } catch (error) {
      console.error("AI request error:", error);
      setReply(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="ai-test">

      <h2>SkillInfo AI</h2>

      <p>
        Ask the AI a question about your learning.
      </p>

      <textarea
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        placeholder="Ask something like: Explain arrays in C++"
      />

      <button
        type="button"
        onClick={askAI}
        disabled={loading}
      >
        {loading ? "Thinking..." : "Ask AI →"}
      </button>

      {reply && (
        <div className="ai-response">
          <h3>AI Response</h3>
          <p>{reply}</p>
        </div>
      )}

    </section>
  );
}

export default AITest;