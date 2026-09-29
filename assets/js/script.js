document.addEventListener("DOMContentLoaded", () => {
  // 1. Menu Mobile
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("nav-active");
    });
  }

  // 2. Acordeão dos Tutoriais
  const tutorialCards = document.querySelectorAll(".tutorial-card");
  tutorialCards.forEach((card) => {
    const header = card.querySelector(".tutorial-header");
    if (header) {
      header.addEventListener("click", () => {
        card.classList.toggle("tutorial-closed");
      });
    }
  });
});