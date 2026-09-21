document.addEventListener("DOMContentLoaded", () => {
  // 1. Menu Mobile (Hambúrguer)
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("nav-active");
    });
  }

  // 2. Comportamento Sanfona (Accordion) nos Tutoriais
  const tutorialHeaders = document.querySelectorAll(".tutorial-header");
  tutorialHeaders.forEach((header) => {
    header.style.cursor = "pointer";
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;
      if (content) {
        content.classList.toggle("tutorial-closed");
      }
    });
  });

  // 3. Feedback ao clicar em botões de convite
  const groupButtons = document.querySelectorAll(".btn-card, .btn-group-link");
  groupButtons.forEach((button) => {
    button.addEventListener("click", () => {
      console.log(`[Boas-Vindas Dev] Acesso ao canal registrado: ${button.textContent.trim()}`);
    });
  });
});