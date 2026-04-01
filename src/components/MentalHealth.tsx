const symptoms = [
  {
    emoji: "😔",
    title: "Persistent sadness",
    description:
      "Feeling empty, hopeless, or tearful for more than two weeks with no clear reason.",
  },
  {
    emoji: "😰",
    title: "Extreme anxiety",
    description:
      "Constant worry, panic attacks, racing heart, or fears that stop you living normally.",
  },
  {
    emoji: "🛏️",
    title: "Sleep disturbances",
    description:
      "Sleeping too much, too little, or waking frequently — often linked to depression or anxiety.",
  },
  {
    emoji: "🚫",
    title: "Social withdrawal",
    description:
      "Pulling away from friends, family, or activities you used to enjoy.",
  },
  {
    emoji: "🧠",
    title: "Trouble focusing",
    description:
      "Difficulty thinking clearly, making decisions, or remembering things at work or school.",
  },
  {
    emoji: "🍽️",
    title: "Appetite changes",
    description:
      "Eating far more or less than usual, or losing interest in food and drink entirely.",
  },
  {
    emoji: "😤",
    title: "Irritability",
    description:
      "Feeling easily frustrated, angry, or overwhelmed by small everyday situations.",
  },
  {
    emoji: "💭",
    title: "Intrusive thoughts",
    description:
      "Unwanted, repetitive thoughts that are difficult to control or make sense of.",
  },
];

export default function MentalHealth() {
  return (
    <section className="mh-section" id="mental-health">
      <div className="mh-container">

        {/* Left */}
        <div className="mh-left">
          <span className="mh-badge">
  <span className="hero-badge-dot"></span>
  KNOW THE SIGNS
</span>

          <h2 className="mh-heading">
            Understanding<br />mental health
          </h2>

          <p className="mh-body">
            Mental illness is not weakness. It's a health condition — just
            like diabetes or heart disease. Recognising the signs early
            means getting help sooner.
          </p>

          <p className="mh-body">
            In Thailand,{" "}
            <strong className="mh-highlight">9.1 million people</strong> are
            estimated to live with mental health conditions — yet many never
            seek treatment due to stigma or lack of information. Talking
            about it is the first step.
          </p>
        </div>

        {/* Right Cards */}
        <div className="mh-right">
          {symptoms.map((symptom) => (
            <div className="mh-card" key={symptom.title}>
              <span className="mh-card-emoji">{symptom.emoji}</span>
              <div className="mh-card-content">
                <h3 className="mh-card-title">{symptom.title}</h3>
                <p className="mh-card-desc">{symptom.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}       