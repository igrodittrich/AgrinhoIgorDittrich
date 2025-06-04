const dados = {
  pao: {
    titulo: 'Pão',
    texto: 'O pão vem do trigo, cultivado no campo. Após a colheita, o trigo é moído e vira farinha, que é usada para fazer o pão.'
  },
  carne: {
    titulo: 'Carne',
    texto: 'A carne vem da pecuária. O gado é criado em fazendas e sua carne processada vira hambúrguer.'
  },
  alface: {
    titulo: 'Alface',
    texto: 'A alface é cultivada em hortas. Precisa de solo fértil, água e luz do sol. É colhida fresca para consumo.'
  },
  tomate: {
    titulo: 'Tomate',
    texto: 'O tomate também é plantado em hortas. Depois de colhido, pode ser usado cru ou em molhos.'
  },
  queijo: {
    titulo: 'Queijo',
    texto: 'O queijo é feito a partir do leite, que vem da pecuária leiteira. O leite é transformado por processos industriais em vários tipos de queijo.'
  }
};

function mostrarInfo(ingrediente) {
  const info = dados[ingrediente];

  // Transição suave para o texto informativo
  const infoBox = document.getElementById('info');
  infoBox.style.opacity = 0;

  setTimeout(() => {
    infoBox.innerHTML = `<h2>${info.titulo}</h2><p>${info.texto}</p>`;
    infoBox.style.opacity = 1;
  }, 300);

  // Criar a camada visual do hambúrguer
  const camada = document.createElement('div');
  camada.className = 'camada';
  camada.textContent = info.titulo;
  camada.style.opacity = 0;

  const camadasDiv = document.getElementById('camadas');
  camadasDiv.appendChild(camada);

  // Adiciona animação de entrada suave
  setTimeout(() => {
    camada.style.transition = 'opacity 0.5s ease-in-out, transform 0.5s';
    camada.style.opacity = 1;
    camada.style.transform = 'translateY(0)';
  }, 50);
}
