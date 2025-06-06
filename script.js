const dados = {
  pao: {
    titulo: 'Pão',
    texto: 'O pão nasce no campo, com o cultivo do trigo, um cereal. Agricultores preparam a terra, semeiam, cuidam do solo e aí colhem. Depois de colher, os grãos são levados para moinhos, onde são moídos e viram farinha. Essa farinha, misturada com água, fermento e outras coisas, vira o pão que consumimos todo dia.'
  },
  carne: {
    titulo: 'Carne',
    texto: 'A carne vem da criação de gado, que é comum em muitas fazendas aqui do Brasil. O gado é criado em fazendas, alimentado, bem cuidado, e, por fim, abatido, e sua carne processada vira hambúrguer na chapa tostando. O campo é muito importante nisso, já que a alimentação dos bois envolve outros cultivos como milho e soja'
  },
  alface: {
    titulo: 'Alface',
    texto: 'A alface é cultivada em hortas. As vezes até hortas urbanas. Precisa de solo fértil, água e luz do sol. Produção familiar muitas vezes se sobressai no cultivo dessa verdura. Então, é colhida fresca para consumo.'
  },
  tomate: {
    titulo: 'Tomate',
    texto: 'O tomate também é plantado em hortas, e é muito comum aqui no Brasil. Meio complicado de cultivar, já que precisa de atenção constante por ser sensível a pragas e ao clima. Depois de colhido, pode ser usado cru ou usado em molhos como o ketchup. No hambúrguer vai o tomate cru, e também o ketchup.'
  },
  queijo: {
    titulo: 'Queijo',
    texto: 'O queijo é feito a partir do leite, que vem da pecuária leiteira. O leite é transformado pasteurizando, fermentando e um processo de maturação até virar diferentes tipos de queijo. É muito comum aqui no Brasil.'
  }
};

function mostrarInfo(ingrediente) {
  const info = dados[ingrediente];
  const infoBox = document.getElementById('info');

  infoBox.style.opacity = 0;
  setTimeout(() => {
    infoBox.innerHTML = `<h2>${info.titulo}</h2><p>${info.texto}</p>`;
    infoBox.style.opacity = 1;
  }, 300);


  const camada = document.createElement('div');
  let nomeClasse = ingrediente.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '');
  camada.className = `camada ${nomeClasse}`;
  camada.textContent = info.titulo;
  camada.style.opacity = 0;

  const camadasDiv = document.getElementById('camadas');
  camadasDiv.appendChild(camada);

  setTimeout(() => {
    camada.style.transition = 'opacity 0.5s ease-in-out, transform 0.5s';
    camada.style.opacity = 1;
    camada.style.transform = 'translateY(0)';
  }, 50);
}

function reiniciarHamburguer() {
  document.getElementById('camadas').innerHTML = '';
  document.getElementById('info').innerHTML = '';
}
