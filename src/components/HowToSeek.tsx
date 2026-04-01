const steps = [
  {
    number: 1,
    icon: "💬",
    title: "Tell someone you trust",
    desc: "A close friend, family member, or one of our volunteers. You don't have to face this alone before seeing a doctor.",
  },
  {
    number: 2,
    icon: "📋",
    title: "Write down how you feel",
    desc: "Note your symptoms, how long you've felt this way, and what triggers them. This helps the doctor understand you faster.",
  },
  {
    number: 3,
    icon: "📅",
    title: "Book an appointment",
    desc: "RSU students: contact Student Affairs. Others: call any clinic above. Many offer same-week appointments. It takes one phone call.",
  },
  {
    number: 4,
    icon: "🌱",
    title: "Attend and be honest",
    desc: "Your doctor is there to help, not judge. The more honest you are, the better your treatment plan will be. You've already done the hardest part.",
  },
];

export default function HowToSeek() {
  return (
    <section className="hts-section">
      <div className="hts-container">

        {/* Header */}
        <div className="hts-header">
          <span className="hts-eyebrow">HOW TO GET HELP</span>
          <h2 className="hts-heading">Your first steps to seeing a doctor</h2>
          <p className="hts-subtext">
            Feeling nervous is completely normal. Here's how to take it one
            step at a time — no big leap needed.
          </p>
        </div>

        {/* Steps grid */}
        <div className="hts-grid">
          {steps.map((step) => (
            <div key={step.number} className="hts-card">
              <div className="hts-num">{step.number}</div>
              <div className="hts-icon">{step.icon}</div>
              <h3 className="hts-card-title">{step.title}</h3>
              <p className="hts-card-desc">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}