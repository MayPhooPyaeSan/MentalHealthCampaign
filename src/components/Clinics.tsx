import { useState } from "react";

type Category = "All" | "Government" | "Private" | "RSU";

interface Clinic {
  id: number;
  category: Category;
  categoryLabel: string;
  name: string;
  location: string;
  tags: string[];
  feeLabel: string;
  fee: string;
  phone?: string;
  available?: string;
  actionLabel: string;
  actionHref: string;
  featured?: boolean;
}

const clinics: Clinic[] = [
  {
    id: 1,
    category: "RSU",
    categoryLabel: "RSU CAMPUS",
    name: "Rangsit University — Mental Wellness Clinic",
    location: "The Office of Health Welfare, 2nd floor, Rangsit University",
    tags: ["Psychiatry", "Counselling", "Group therapy"],
    feeLabel: "STUDENT FEE",
    fee: "Free",
    phone: "0-2997-6000 ext. 4497",
    actionLabel: "Directions",
    actionHref: "https://maps.google.com/?q=Rangsit+University+Pathum+Thani",
    featured: true,
  },
  {
    id: 2,
    category: "Government",
    categoryLabel: "GOVERNMENT",
    name: "Somdet Chaopraya Institute of Psychiatry",
    location: "Khlong San, Bangkok",
    tags: ["Psychiatry", "Psychotherapy", "Crisis care"],
    feeLabel: "OUTPATIENT FEE",
    fee: "฿30–100",
    phone: "02-442-2500",
    actionLabel: "Directions",
    actionHref: "https://maps.google.com/?q=Somdet+Chaopraya+Institute+of+Psychiatry",
  },
  {
    id: 3,
    category: "Government",
    categoryLabel: "GOVERNMENT",
    name: "Rajanukul Institute (จิตเวชราชนครินทร์)",
    location: "Min Buri, Bangkok",
    tags: ["Child & adult psychiatry", "Counselling", "Rehabilitation"],
    feeLabel: "OUTPATIENT FEE",
    fee: "฿30–100",
    phone: "02-248-8900",
    actionLabel: "Directions",
    actionHref: "https://maps.google.com/?q=Rajanukul+Institute+Bangkok",
  },
  {
    id: 4,
    category: "Government",
    categoryLabel: "GOVERNMENT",
    name: "Srithanya Hospital (ศรีธัญญา)",
    location: "Nonthaburi (near Pathum Thani)",
    tags: ["Psychiatry", "Addiction", "Inpatient"],
    feeLabel: "OUTPATIENT FEE",
    fee: "฿30–100",
    phone: "02-528-7800",
    actionLabel: "Directions",
    actionHref: "https://maps.google.com/?q=Srithanya+Hospital+Nonthaburi",
  },
  {
    id: 5,
    category: "Private",
    categoryLabel: "PRIVATE",
    name: "HappyMe Clinic Bangkok",
    location: "Bangkok — English & Thai",
    tags: ["Psychotherapy", "CBT", "Couples therapy", "Online sessions"],
    feeLabel: "PER SESSION (50 MIN)",
    fee: "฿2,000–3,500",
    actionLabel: "Book",
    actionHref: "https://happymeclinic.com/en/",
  },
  {
    id: 6,
    category: "Private",
    categoryLabel: "PRIVATE",
    name: "The Oasis Mental Health Centre",
    location: "Bangkok — Thai & English",
    tags: ["Psychotherapy", "Art therapy", "Yoga therapy", "Family therapy"],
    feeLabel: "PER SESSION (50 MIN)",
    fee: "฿1500–2,500",
    actionLabel: "Book",
    actionHref: "https://en.theoasiscare.com",
  },
  {
    id: 7,
    category: "Private",
    categoryLabel: "PRIVATE HOSPITAL",
    name: "Samitivej Sukhumvit — Psychiatry Clinic",
    location: "Sukhumvit, Bangkok",
    tags: ["Psychiatry", "Depression", "Anxiety", "Sleep disorders"],
    feeLabel: "CONSULTATION FEE",
    fee: "฿1,500–4,000",
    phone: "02-022-2222",
    actionLabel: "Book",
    actionHref: "https://www.samitivejhospitals.com/center/detail/psychiatry-clinic",
  },
  {
    id: 8,
    category: "Private",
    categoryLabel: "PRIVATE HOSPITAL",
    name: "Bangkok Mental Health Rehab Center (BMRC)",
    location: "Bangkok Hospital, Bangkok",
    tags: ["Psychiatric rehab", "Group therapy", "Music therapy", "Inpatient"],
    feeLabel: "OUTPATIENT CONSULTATION",
    fee: "฿1,200–3,500",
    phone: "02-310-3751",
    actionLabel: "Book",
    actionHref: "https://www.bangkokhospital.com/en/bangkok/center-clinic/brain/bangkok-mental-health-rehabilitation-and-recovery-center",
  },
  {
    id: 9,
    category: "Private",
    categoryLabel: "PRIVATE CLINIC",
    name: "Counselling Thailand — Bangkok",
    location: "Soi Sukhumvit 31, Bangkok",
    tags: ["Counselling", "CBT", "Couples", "In-person & online"],
    feeLabel: "PER SESSION (90 MIN)",
    fee: "฿3,745",
    actionLabel: "Book",
    actionHref: "https://counsellingthailand.com",
  },
  {
    id: 10,
    category: "Government",
    categoryLabel: "GOVERNMENT / FREE",
    name: "Department of Mental Health Hotline (กรมสุขภาพจิต)",
    location: "1323 — nationwide",
    tags: ["Free counselling", "Crisis support", "Referral service"],
    feeLabel: "COST",
    fee: "Free",
    available: "Available 24/7 in Thai",
    actionLabel: "Call 1323",
    actionHref: "tel:1323",
  },
];

const categories: Category[] = ["All", "Government", "Private", "RSU"];

function getCategoryTagClass(label: string): string {
  if (label.includes("RSU")) return "cl-tag-rsu";
  if (label.includes("GOVERNMENT")) return "cl-tag-gov";
  if (label.includes("PRIVATE")) return "cl-tag-private";
  return "cl-tag-gov";
}

interface ClinicCardProps {
  clinic: Clinic;
}

function ClinicCard({ clinic: c }: ClinicCardProps) {
  const tagClass = getCategoryTagClass(c.categoryLabel);

  return (
    <div className={`cl2-card${c.featured ? " cl2-card-featured" : ""}`}>
      {/* Top */}
      <div className="cl2-card-top">
        <span className={tagClass}>{c.categoryLabel}</span>
        <h3 className="cl2-name">{c.name}</h3>
        <p className="cl2-location">
          <span className="cl2-pin">📍</span>
          {c.location}
        </p>
      </div>

      {/* Service tags */}
      <div className="cl2-tags">
        {c.tags.map((tag) => (
          <span key={tag} className="cl2-tag">
            {tag}
          </span>
        ))}
      </div>

      {/* Bottom */}
      <div className="cl2-card-bottom">
        <div className="cl2-fee-block">
          <p className="cl2-fee-label">{c.feeLabel}</p>
          <p className="cl2-fee">{c.fee}</p>
          {c.phone && (
            <a href={`tel:${c.phone}`} className="cl2-phone">
              📞 {c.phone}
            </a>
          )}
          {c.available && (
            <p className="cl2-available">{c.available}</p>
          )}
        </div>

        <a
          href={c.actionHref}
          target={c.actionHref.startsWith("tel:") ? "_self" : "_blank"}
          rel="noopener noreferrer"
          className="cl2-action-btn"
        >
          {c.actionLabel} →
        </a>
      </div>
    </div>
  );
}

export default function Clinics() {
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All" ? clinics : clinics.filter((c) => c.category === active);

  return (
    <section className="cl2-section" id="clinics">
      <div className="cl2-container">

        {/* Header */}
        <div className="cl2-header">
          <div>
            <span className="cl2-eyebrow">FIND HELP</span>
            <h2 className="cl2-heading">Mental health clinics in Thailand</h2>
            <p className="cl2-subtext">
              Real clinics, real prices — no surprises. Click any card to
              learn more or get directions.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="cl2-filters">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`cl2-filter${active === cat ? " cl2-filter-active" : ""}`}
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="cl2-grid">
          {filtered.map((clinic) => (
            <ClinicCard key={clinic.id} clinic={clinic} />
          ))}
        </div>

      </div>
    </section>
  );
}