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

  // 3. Dicas Rotativas
  const dicas = [
    "Organize suas tarefas e defina prioridades para a semana.",
    "Confira o Moodle para não perder os prazos das atividades.",
    "Aproveite cursos gratuitos para desenvolver suas habilidades.",
    "Atualize seu currículo com os conhecimentos que está adquirindo.",
    "Revise os conteúdos estudados durante a semana."
  ];
  // Dica Conforme a Data
  const dataAtual = new Date();
  const dia = dataAtual.getDate();
  const indice = (dia - 1) % dicas.length;

  const dicaTexto = document.getElementById("dica-texto");

  if(dicaTexto) {
    dicaTexto.textContent = dicas[indice];
  }
});