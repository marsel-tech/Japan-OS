import { useEffect, useState } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (selector, sectionName) => {
    document.querySelector(selector)?.scrollIntoView({
      behavior: "smooth",
    });

    setActiveSection(sectionName);
    setMenuOpen(false);
  };

  useEffect(() => {
    const sections = [
      { selector: ".hero", name: "home" },
      { selector: ".destinations", name: "destinations" },
      { selector: ".itinerary", name: "itinerary" },
      { selector: ".travel-tips", name: "tips" },
      { selector: ".foods", name: "foods" },
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      sections.forEach((section) => {
        const element = document.querySelector(section.selector);

        if (!element) return;

        const top = element.offsetTop;
        const height = element.offsetHeight;

        if (
          scrollPosition >= top &&
          scrollPosition < top + height
        ) {
          setActiveSection(section.name);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <h2
        className="navbar-logo"
        onClick={() => scrollToSection(".hero", "home")}
      >
        🇯🇵 by Marsel 🗼
      </h2>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <i
          className={
            menuOpen
              ? "fa-solid fa-xmark"
              : "fa-solid fa-bars"
          }
        ></i>
      </button>

      <ul className={menuOpen ? "nav-menu open" : "nav-menu"}>
        <li
          className={activeSection === "home" ? "nav-active" : ""}
          onClick={() => scrollToSection(".hero", "home")}
        >
          Home
        </li>

        <li
          className={
            activeSection === "destinations"
              ? "nav-active"
              : ""
          }
          onClick={() =>
            scrollToSection(".destinations", "destinations")
          }
        >
          Destinasi
        </li>

        <li
          className={
            activeSection === "itinerary"
              ? "nav-active"
              : ""
          }
          onClick={() =>
            scrollToSection(".itinerary", "itinerary")
          }
        >
          Itinerary
        </li>

        <li
          className={
            activeSection === "tips"
              ? "nav-active"
              : ""
          }
          onClick={() =>
            scrollToSection(".travel-tips", "tips")
          }
        >
          Tips
        </li>

        <li
          className={
            activeSection === "foods"
              ? "nav-active"
              : ""
          }
          onClick={() =>
            scrollToSection(".foods", "foods")
          }
        >
          Foods
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;