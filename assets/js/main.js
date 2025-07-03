document.addEventListener("DOMContentLoaded", () => {
  /*===== MENU SHOW =====*/
  const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId);

    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        nav.classList.toggle("show");
      });
    }
  };
  showMenu("nav-toggle", "nav-menu");

  /*===== REMOVE MENU ON LINK CLICK (MOBILE) =====*/
  const navLinks = document.querySelectorAll(".nav__link");

  function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    if (navMenu) {
      navMenu.classList.remove("show");
    }
  }
  navLinks.forEach((link) => link.addEventListener("click", linkAction));

  /*===== SCROLL SECTIONS ACTIVE LINK =====*/
  const sections = document.querySelectorAll("section[id]");

  const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 58;
      const sectionId = current.getAttribute("id");

      const sectionLink = document.querySelector(
        `.nav__menu a[href*="${sectionId}"]`
      );

      if (sectionLink) {
        if (
          scrollDown > sectionTop &&
          scrollDown <= sectionTop + sectionHeight
        ) {
          sectionLink.classList.add("active-link");
        } else {
          sectionLink.classList.remove("active-link");
        }
      }
    });
  };
  window.addEventListener("scroll", scrollActive);

  /*===== SCROLL REVEAL ANIMATION =====*/
  if (typeof ScrollReveal !== "undefined") {
    const sr = ScrollReveal({
      origin: "top",
      distance: "60px",
      duration: 2000,
      delay: 200,
      // reset: true
    });

    sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text", {});
    sr.reveal(
      ".home__img, .about__subtitle, .about__text, .skills__img",
      { delay: 400 }
    );
    sr.reveal(".home__social-icon", { interval: 200 });
    sr.reveal(".skills__data, .work__img, .contact__input", { interval: 200 });
  } else {
    console.warn("⚠️ ScrollReveal is not loaded.");
  }
});
