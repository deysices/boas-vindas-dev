document.addEventListener("DOMContentLoaded", () => {
  // 1. Menu Mobile Robusto (Funciona via ID ou Classe)
  const navToggle = document.getElementById("navToggle") || document.querySelector(".nav-toggle");
  const navLinks = document.getElementById("navLinks") || document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      navLinks.classList.toggle("nav-active");
    });

    // Fecha o menu se o usuário clicar fora dele
    document.addEventListener("click", (e) => {
      if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) {
        navLinks.classList.remove("nav-active");
      }
    });
  }

  // 2. Acordeão dos Tutoriais (tutoriais.html)
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