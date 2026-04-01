export default function Footer() {
  return (
    <footer className="ft-footer" id="footer">
      <div className="ft-container">

        {/* Top grid */}
        <div className="ft-grid">

          {/* Brand */}
          <div className="ft-brand">
            <p className="ft-logo">You Are Not Alone</p>
            <p className="ft-brand-desc">
              A mental health awareness campaign by Rangsit University
              students. We believe that seeking help is a sign of strength —
              and that no one should face their struggles alone.
            </p>
            <a href="https://line.me/ti/p/@counselingrsu" target="_blank" rel="noopener noreferrer" className="ft-email">
              LineID @CounselingRSU
            </a>
          </div>

          {/* Navigate */}
           <div className="ft-col">
            <h5 className="ft-col-heading">NAVIGATE</h5>
            <ul className="ft-links">
              <li><a href="#mental-health">Understanding Mental Health</a></li>
              <li><a href="#self-check">Self-Check Quiz</a></li>
              <li><a href="#clinics">Find a Clinic</a></li>
              <li><a href="#volunteers">Our Volunteers</a></li>
              <li><a href="#crisis">Crisis Support</a></li>
            </ul>
          </div>

          {/* Emergency */}
          <div className="ft-col">
            <h5 className="ft-col-heading">EMERGENCY</h5>
            <ul className="ft-links">
              <li><a href="tel:1323">1323 — Mental Health Hotline</a></li>
              <li><a href="tel:027136793">02-713-6793 — Samaritans</a></li>
              <li><a href="tel:1669">1669 — Medical Emergency</a></li>
              <li><a href="tel:029976000">RSU Campus: 02-997-6000 ext. 4497</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="ft-bottom">
          <p className="ft-copy">
            © 2025 RSU Mental Health Campaign · Made with ♥ by RSU Volunteers
          </p>
          <p className="ft-disclaimer">
            This site is for awareness only and does not replace professional medical advice.
          </p>
        </div>

      </div>
    </footer>
  );
}