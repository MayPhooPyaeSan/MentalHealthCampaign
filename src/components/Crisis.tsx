const hotlines = [
  {
    label: "Thailand Mental Health Hotline",
    number: "1323",
    detail: "24/7 · Free · Thai language",
    href: "tel:1323",
  },
  {
    label: "Samaritans of Thailand",
    number: "02-713-6793",
    detail: "Daily 12:00–22:00 · Thai language",
    href: "tel:027136793",
  },
  {
    label: "RSU Student Health Center",
    number: "02-997-6000 ext. 4497",
    detail: "Ask for Student Health Center",
    href: "tel:029976000",
  },
  {
    label: "Emergency Medical",
    number: "1669",
    detail: "24/7 · Free · National EMS",
    href: "tel:1669",
  },
];

export default function Crisis() {
  return (
    <section className="cr-section" id="crisis">
      <div className="cr-container">

        {/* Header */}
        <div className="cr-header">
          <span className="cr-eyebrow">EMERGENCY SUPPORT</span>
          <h2 className="cr-heading">Need help right now?</h2>
          <p className="cr-subtext">
            If you or someone you know is in crisis, please reach out
            immediately. You don't have to be in immediate danger to call —
            feeling overwhelmed is enough.
          </p>
        </div>

        {/* Hotline grid */}
        <div className="cr-grid">
          {hotlines.map((h) => (
            <a key={h.label} href={h.href} className="cr-card">
              <p className="cr-card-label">{h.label.toUpperCase()}</p>
              <p className="cr-card-number">{h.number}</p>
              <p className="cr-card-detail">{h.detail}</p>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}