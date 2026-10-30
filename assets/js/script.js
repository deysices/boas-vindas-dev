document.addEventListener("DOMContentLoaded", () => {
  // 1. Menu Mobile
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.querySelector(".nav-links");

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
    // Organização e estudos
    "Organize suas tarefas e defina prioridades para a semana.",
    "Confira o Moodle para não perder os prazos das atividades.",
    "Revise os conteúdos estudados durante a semana.",
    "Divida tarefas grandes em etapas menores para facilitar sua conclusão.",
    "Reserve alguns minutos do dia para organizar suas atividades acadêmicas.",
    "Anote as datas de provas, trabalhos e entregas em um calendário.",
    "Evite deixar todos os trabalhos para a última hora.",
    "Faça pequenas pausas durante os estudos para manter a concentração.",
    "Crie uma rotina de estudos que seja compatível com sua realidade.",
    "Se tiver dificuldade em uma matéria, procure ajuda antes de acumular dúvidas.",

    // Programação e tecnologia
    "Pratique programação regularmente, mesmo que seja por poucos minutos.",
    "Não tenha medo de cometer erros ao programar: eles fazem parte do aprendizado.",
    "Aprenda a interpretar mensagens de erro para encontrar soluções.",
    "Antes de copiar um código, tente entender o que cada parte faz.",
    "Pratique lógica de programação para desenvolver sua capacidade de resolver problemas.",
    "Aprenda Git e GitHub para acompanhar as mudanças nos seus projetos.",
    "Crie pequenos projetos para colocar em prática o que você aprende.",
    "Conheça os atalhos do seu editor de código para ganhar produtividade.",
    "Aprenda a pesquisar erros e soluções na documentação oficial.",
    "Não tente aprender todas as linguagens de programação ao mesmo tempo.",
    "Releia seu código e procure maneiras de torná-lo mais organizado.",
    "Comente o código quando isso ajudar a explicar trechos importantes.",
    "Aprenda a dividir um problema grande em problemas menores.",
    "Explore HTML, CSS e JavaScript construindo páginas e funcionalidades.",
    "Pratique lógica antes de se preocupar em escrever códigos complexos.",

    // Faculdade e vida acadêmica
    "Consulte regularmente os comunicados e avisos da faculdade.",
    "Confira o Portal Acadêmico para acompanhar suas informações acadêmicas.",
    "Explore o Moodle para conhecer os materiais disponibilizados pelos professores.",
    "Verifique se existem orientações específicas antes de entregar uma atividade.",
    "Participe dos trabalhos em grupo e contribua com suas ideias.",
    "Mantenha contato respeitoso com colegas, professores e funcionários.",
    "Perguntar quando tiver dúvidas é uma forma de participar do aprendizado.",
    "Aproveite projetos de extensão para aplicar seus conhecimentos em situações reais.",
    "Participe de eventos acadêmicos para conhecer novas áreas da tecnologia.",
    "Organize seus arquivos e materiais para encontrá-los com facilidade.",

    // Carreira e oportunidades
    "Atualize seu currículo com os conhecimentos que está adquirindo.",
    "Crie um perfil profissional no LinkedIn e mantenha suas informações atualizadas.",
    "Pesquise os requisitos das vagas de estágio para identificar o que precisa aprender.",
    "Acompanhe oportunidades de estágio e programas para estudantes.",
    "Monte um portfólio com projetos que demonstrem suas habilidades.",
    "Inclua no portfólio projetos acadêmicos que você desenvolveu e consegue explicar.",
    "Pesquise diferentes áreas de TI para descobrir quais despertam seu interesse.",
    "Prepare-se para entrevistas praticando como apresentar seus conhecimentos.",
    "Valorize projetos pessoais e acadêmicos: eles também mostram sua evolução.",
    "Desenvolva a comunicação para explicar suas ideias de forma clara.",
    "Aprenda a trabalhar em equipe e a receber feedbacks construtivos.",
    "Estabeleça metas profissionais pequenas e acompanhe seu progresso.",

    // Cursos e desenvolvimento
    "Aproveite cursos gratuitos para desenvolver suas habilidades.",
    "Pesquise plataformas que oferecem cursos com conteúdos relevantes para sua área.",
    "Antes de começar um curso, defina o que você deseja aprender com ele.",
    "Pratique o conteúdo de um curso em vez de apenas assistir às aulas.",
    "Salve certificados e comprovantes de cursos concluídos em um local organizado.",
    "Explore documentações oficiais para aprofundar seus conhecimentos.",
    "Escolha cursos que estejam alinhados aos seus objetivos de aprendizagem.",

    // Segurança digital e boas práticas
    "Use senhas fortes e diferentes para suas contas importantes.",
    "Ative a autenticação em dois fatores sempre que possível.",
    "Desconfie de mensagens com links suspeitos ou pedidos inesperados de dados.",
    "Mantenha seus programas e dispositivos atualizados.",
    "Faça cópias de segurança dos arquivos e projetos importantes.",
    "Nunca compartilhe senhas ou códigos de autenticação com outras pessoas.",
    "Evite publicar informações pessoais ou dados confidenciais em projetos públicos."
  ];
  // Dica Conforme a Data
  const dataAtual = new Date();
  const dia = dataAtual.getDate();
  let indice = (dia - 1) % dicas.length;

  const dicaTexto = document.getElementById("dica-texto");
  const btnOutraDica = document.getElementById("btn-outra-dica");

  if(dicaTexto) {
    dicaTexto.textContent = dicas[indice];
  }
  if (dicaTexto && btnOutraDica) {
    btnOutraDica.addEventListener("click", () => {
      let novoIndice;

      do {
        novoIndice = Math.floor(Math.random() * dicas.length);
      } while (novoIndice === indice);

      dicaTexto.textContent = dicas[novoIndice];
      indice = novoIndice;
    });
  }
});