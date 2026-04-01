import { useState } from "react";

interface Question {
  id: number;
  question: string;
  options: string[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "Over the past two weeks, how often have you felt down, depressed, or hopeless?",
    options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
  },
  {
    id: 2,
    question: "How often have you had little interest or pleasure in doing things?",
    options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
  },
  {
    id: 3,
    question: "How often have you felt nervous, anxious, or on edge?",
    options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
  },
  {
    id: 4,
    question: "How often have you had trouble sleeping, or sleeping too much?",
    options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
  },
  {
    id: 5,
    question: "How often have you felt tired or had little energy?",
    options: ["Not at all", "Several days", "More than half the days", "Nearly every day"],
  },
];

const scores: Record<string, number> = {
  "Not at all": 0,
  "Several days": 1,
  "More than half the days": 2,
  "Nearly every day": 3,
};

export default function SelfCheck() {
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [current, setCurrent] = useState(0);

  const handleAnswer = (questionId: number, option: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
  };

  const totalScore = Object.values(answers).reduce(
    (sum, val) => sum + (scores[val] ?? 0),
    0
  );

  const getResult = () => {
    if (totalScore <= 3) return { label: "Minimal", color: "#5A7D6E", message: "You seem to be doing well. Keep taking care of yourself and check in regularly." };
    if (totalScore <= 7) return { label: "Mild", color: "#b08d57", message: "You may be experiencing some stress. Consider talking to someone you trust or a counsellor." };
    if (totalScore <= 11) return { label: "Moderate", color: "#c0694a", message: "Your results suggest moderate difficulty. We strongly encourage you to speak with a professional." };
    return { label: "Severe", color: "#a83232", message: "Please reach out to a mental health professional or clinic as soon as possible. You don't have to face this alone." };
  };

  const result = getResult();
  const allAnswered = Object.keys(answers).length === questions.length;

  return (
    <section className="sc-section" id="self-check">
      <div className="sc-header">
        <span className="sc-badge">SELF-CHECK</span>
        <h2 className="sc-heading">How are you really doing?</h2>
        <p className="sc-subtext">
          This is not a diagnosis. It's a gentle check-in — five honest questions to
          help you reflect on how you've been feeling lately.
        </p>
      </div>

      <div className="sc-card">
        {!submitted ? (
          <>
            {/* Progress Bar */}
            <div className="sc-progress-bar">
              <div
                className="sc-progress-fill"
                style={{ width: `${((Object.keys(answers).length) / questions.length) * 100}%` }}
              />
            </div>

            <p className="sc-counter">
              Question {current + 1} of {questions.length}
            </p>

            {/* Question */}
            <p className="sc-question">{questions[current].question}</p>

            {/* Options */}
            <div className="sc-options">
              {questions[current].options.map((option) => (
                <button
                  key={option}
                  className={`sc-option ${answers[questions[current].id] === option ? "sc-option-selected" : ""}`}
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
                  onClick={() => setSubmitted(true)}
                  disabled={!allAnswered}
                >
                  See Results
                </button>
              )}
            </div>
          </>
        ) : (
          /* Result */
          <div className="sc-result">
            <p className="sc-result-label">Your result</p>
            <h3
              className="sc-result-score"
              style={{ color: result.color }}
            >
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