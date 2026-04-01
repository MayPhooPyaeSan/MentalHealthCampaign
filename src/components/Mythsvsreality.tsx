const myths = [
  {
    myth: '"Mental illness is a sign of weakness or personal failure."',
    reality:
      "Mental illness is a health condition caused by biological, psychological, and social factors — not weakness. Seeking help is one of the strongest things a person can do.",
  },
  {
    myth: '"You should just push through it — others have it worse."',
    reality:
      "Pain is not a competition. What you feel is valid, regardless of what others are experiencing. Comparing suffering doesn't help anyone heal.",
  },
  {
    myth: '"Seeing a psychiatrist means you\'re \'crazy.\'"',
    reality:
      "Millions of people see psychiatrists and therapists — including athletes, CEOs, and people who simply want to feel better. It's healthcare, nothing more.",
  },
  {
    myth: '"Medication will change who I am or make me dependent."',
    reality:
      "Modern mental health medications are carefully prescribed and monitored. Many people take them short-term and taper off with guidance. They help you be more yourself, not less.",
  },
];

export default function MythsVsReality() {
  return (
    <section className="mvr-section">
      <div className="mvr-container">

        {/* Header */}
        <div className="mvr-header">
          <span className="mvr-eyebrow">BREAK THE STIGMA</span>
          <h2 className="mvr-heading">Myths vs. reality</h2>
          <p className="mvr-subtext">
            Stigma is one of the biggest barriers to getting help. Let's clear
            up the most common misconceptions.
          </p>
        </div>

        {/* Grid */}
        <div className="mvr-grid">
          {myths.map((item, i) => (
            <div key={i} className="mvr-card">
              {/* Myth */}
              <div className="mvr-myth-block">
                <span className="mvr-x">✕</span>
                <div>
                  <p className="mvr-label mvr-label-myth">MYTH</p>
                  <p className="mvr-myth-text">{item.myth}</p>
                </div>
              </div>

              {/* Reality */}
              <div className="mvr-reality-block">
                <span className="mvr-check">✓</span>
                <div>
                  <p className="mvr-label mvr-label-reality">REALITY</p>
                  <p className="mvr-reality-text">{item.reality}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}