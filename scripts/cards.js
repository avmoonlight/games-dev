const valores = [
  {
    title: "Inovação Contínua",
    description: "Acreditamos no poder da criatividade para transformar ideias em experiências inesquecíveis. Buscamos constantemente novas formas de surpreender e encantar nossos jogadores."
  },
  {
    title: "Paixão por Games",
    description: "Jogamos, criamos e vivemos games. A paixão que nos une é o que impulsiona cada projeto, cada personagem e cada mundo que desenvolvemos."
  },
  {
    title: "Comunidade em Primeiro Lugar",
    description: "Nosso foco está na construção de comunidades inclusivas, acolhedoras e engajadas. Criamos jogos para pessoas, ouvindo e evoluindo com cada feedback."
  },
  {
    title: "Excelência Técnica",
    description: "Do código à arte, buscamos qualidade em cada detalhe. Valorizamos a performance, estabilidade e jogabilidade como pilares da nossa entrega."
  },
  {
    title: "Diversidade e Inclusão",
    description: "Acreditamos que os melhores jogos nascem de diferentes vozes, culturas e perspectivas. Nossa equipe e nossos mundos refletem essa pluralidade."
  },
  {
    title: "Espírito Colaborativo",
    description: "Trabalhamos em equipe, compartilhamos conquistas e enfrentamos desafios juntos. Crescemos como empresa e como pessoas, lado a lado."
  },
  {
    title: "Responsabilidade com o Futuro",
    description: "Desenvolvemos com ética e consciência. Nosso compromisso é com um futuro mais sustentável para a indústria, nossos jogadores e o planeta."
  }
];

const container = document.getElementById('valores-cards');

valores.forEach(valor => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <div class="title">${valor.title}</div>
    <div class="description">${valor.description}</div>
  `;
  container.appendChild(card);
});
