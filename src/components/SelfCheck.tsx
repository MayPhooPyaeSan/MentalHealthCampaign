import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY
);

interface Question {
  id: number;
  question: string;
}

const questions: Question[] = [
  { id: 1, question: "Have you been feeling homesick or disconnected from your family lately?" },
  { id: 2, question: "Are you struggling to keep up with your university workload or assignments?" },
  { id: 3, question: "Have you been avoiding classes, group work, or campus activities recently?" },
  { id: 4, question: "Do you often feel lonely or isolated even when surrounded by people at university?" },
  { id: 5, question: "Have you been sleeping poorly or feeling exhausted most days this semester?" },
  { id: 6, question: "Are you feeling pressure from family expectations about your academic performance?" },
  { id: 7, question: "Have you lost interest in things you used to enjoy before starting university?" },
  { id: 8, question: "Do you ever feel like your mental health is affecting your studies or daily life?" },
];

export default function SelfCheck() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [saving, setSaving] = useState(false);

  const handleAnswer = (questionId: number, option: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
  };

  const yesCount = Object.values(answers).filter((v) => v === "Yes").length;

  const getResult = () => {
    if (yesCount <= 1)
      return {
        label: "You're doing well",
        color: "#5A7D6E",
        message:
          "You seem to be coping well with university life. Keep taking care of yourself and don't hesitate to reach out if things change.",
      };
    if (yesCount <= 3)
      return {
        label: "Some signs of stress",
        color: "#b08d57",
        message:
          "You're dealing with a few challenges that are very common in university life. Consider talking to a friend, a lecturer, or one of our volunteers.",
      };
    if (yesCount <= 5)
      return {
        label: "You may need support",
        color: "#c0694a",
        message:
          "Several areas of your wellbeing seem affected. We strongly encourage you to speak with a counsellor — at RSU it's free for students.",
      };
    return {
      label: "Please reach out",
      color: "#a83232",
      message:
        "You're carrying a lot right now. Please reach out to a mental health professional or one of our volunteers. You don't have to face this alone.",
    };
  };

  const result = getResult();
  const allAnswered = Object.keys(answers).length === questions.length;

  const handleSubmit = async () => {
    setSaving(true);
    try {
      await supabase.from("selfcheck_results").insert({
        yes_count: yesCount,
        result_label: result.label,
      });
    } catch (err) {
      console.error("Failed to save result:", err);
    } finally {
      setSaving(false);
      setSubmitted(true);
    }
  };

  return (
    <section className="sc-section" id="selfcheck">
      <div className="sc-header">
        <span className="sc-badge">SELF-CHECK</span>
        <h2 className="sc-heading">How are you really doing?</h2>
        <p className="sc-subtext">
          Eight quick questions about university life. Answer honestly —
          this is just for you, not a diagnosis.
        </p>
      </div>

      <div className="sc-card">
        {!submitted ? (
          <>
            {/* Progress Bar */}
            <div className="sc-progress-bar">
              <div
                className="sc-progress-fill"
                style={{
                  width: `${(Object.keys(answers).length / questions.length) * 100}%`,
                }}
              />
            </div>

            <p className="sc-counter">
              Question {current + 1} of {questions.length}
            </p>

            {/* Question */}
            <p className="sc-question">{questions[current].question}</p>

            {/* Yes / No options */}
            <div className="sc-options">
              {["Yes", "No"].map((option) => (
                <button
                  key={option}
                  className={`sc-option ${
                    answers[questions[current].id] === option
                      ? "sc-option-selected"
                      : ""
                  }`}
                  onClick={() => handleAnswer(questions[current].id, option)}
                >
                  <span className="sc-radio" />
                  {option}
                </button>
              ))}
            </div>

            {/* Navigation */}
            <div className="sc-nav">
              <button
                className="sc-btn-nav"
                onClick={() => setCurrent((p) => Math.max(p - 1, 0))}
                disabled={current === 0}
              >
                Back
              </button>

              {current < questions.length - 1 ? (
                <button
                  className="sc-btn-next"
                  onClick={() => setCurrent((p) => p + 1)}
                  disabled={!answers[questions[current].id]}
                >
                  Next
                </button>
              ) : (
                <button
                  className="sc-btn-next"
                  onClick={handleSubmit}
                  disabled={!allAnswered || saving}
                >
                  {saving ? "Saving..." : "See Results"}
                </button>
              )}
            </div>
          </>
        ) : (
          /* Result */
          <div className="sc-result">
            <p className="sc-result-label">Your result</p>
            <h3 className="sc-result-score" style={{ color: result.color }}>
              {result.label}
            </h3>
            <p className="sc-result-message">{result.message}</p>

            <div className="sc-result-actions">
              <a href="#clinics" className="sc-btn-clinic">
                Find a Clinic
              </a>
              <button
                className="sc-btn-restart"
                onClick={() => {
                  setAnswers({});
                  setSubmitted(false);
                  setCurrent(0);
                }}
              >
                Retake
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}