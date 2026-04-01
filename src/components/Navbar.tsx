import { Menu, X, Heart } from "lucide-react";
import "../index.css";
import { useEffect, useState } from "react";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#mental-health" },
  { label: "Clinics", href: "#clinics" },
  { label: "Volunteers", href: "#volunteers" },
  { label: "Contact", href: "#crisis" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">

        {/* Logo */}
        <a href="#home" className="navbar-logo">
          <div className="navbar-logo-icon">
            <Heart size={18} color="#ffffff" fill="#ffffff" />
          </div>
          <span className="navbar-logo-text">
            Healthy <span>Future</span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="navbar-cta-wrapper">
          <a href="#clinics" className="navbar-cta">
            Get Help Now
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="navbar-hamburger"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

      </div>

      {/* Mobile Menu */}
      <div className={`navbar-mobile ${isOpen ? "open" : ""}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={() => setIsOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#clinics" className="navbar-mobile-cta" onClick={() => setIsOpen(false)}>
          Get Help Now
        </a>
      </div>
    </nav>
  );
}