import vol1 from "../assets/people1.jpg";
import vol2 from "../assets/people2.jpg";
import vol3 from "../assets/people3.jpg";

const volunteers = [
  {
    image: vol1,
    name: "Khin Hsulab Htun",
    role: "Volunteer",
    major: "Computer Science, Year 1",
    university: "Rangsit University",
    quote:
      '"I started this campaign because I know what it feels like to struggle alone. No one should have to."',
    email: "khinhsulabhtun@gmail.com",
  },
  {
    image: vol2,
    name: "Cherry Soe",
    role: "Volunteer",
    major: "Computer Science, Year 1",
    university: "Rangsit University",
    quote:
      '"Talking about mental health should feel as normal as talking about physical health. That\'s what we\'re working toward."',
    email: "soec5859@gmail.com",
  },
  {
    image: vol3,
    name: "May Phoo Pyae San",
    role: "Volunteer",
    major: "Computer Science, Year 1",
    university: "Rangsit University",
    quote:
      '"I researched every clinic on this site so you can find help without the overwhelm. You just need to make one call."',
    email: "mayphoopyaesan03@gmail.com",
  },
];

 
const avatarStyle: React.CSSProperties = {
  width: "160px",
  height: "160px",
  minWidth: "160px",
  minHeight: "160px",
  maxWidth: "160px",
  maxHeight: "160px",
  borderRadius: "50%",
  objectFit: "cover",
  objectPosition: "center top",
  marginBottom: "0.5rem",
  flexShrink: 0,
  border: "3px solid #ece9e1",
  display: "block",
};

export default function Volunteers() {
  return (
    <section className="vol-section" id="volunteers">
      <div className="vol-container">

        {/* Header */}
        <div className="vol-header">
          <span className="vol-eyebrow">OUR VOLUNTEERS</span>
          <h2 className="vol-heading">Students who care, just like you</h2>
          <p className="vol-subtext">
            We're fellow RSU students running this campaign. We're not
            therapists — but we're here to listen, guide, and walk with you
            to the next step.
          </p>
        </div>

        {/* Cards */}
        <div className="vol-grid">
          {volunteers.map((v) => (
            <div key={v.name} className="vol-card">
              <img
                src={v.image}
                alt={v.name}
                style={avatarStyle}
              />
              <h3 className="vol-name">{v.name}</h3>
              <p className="vol-role">{v.role.toUpperCase()}</p>
              <p className="vol-faculty">
                {v.major}
                <br />
                {v.university}
              </p>
              <p className="vol-quote">{v.quote}</p>
              <a href={`mailto:${v.email}`} className="vol-btn">
                ✉ Get in touch
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}