document.addEventListener("DOMContentLoaded", function() {
  var fundos = document.querySelectorAll(".fundo");

  fundos.forEach(function(fundo) {
      setTimeout(function() {
          fundo.style.opacity = "1";
          
          // Adiciona classe para movimento para a direita ou esquerda com base em uma probabilidade
          fundo.classList.add(Math.random() > 0.5 ? "movimento-direita" : "movimento-esquerda");
      }, Math.random() * 2000);
  });
});
var fundo = ["HI, I'M MATEUS", "HI, I'M MATEUS"];

  // Obtém o elemento body
  var body = document.body;

  // Itera sobre o array de frases
  for (var i = 0; i < fundo.length; i++) {
      // Cria um elemento de parágrafo
      var paragrafo = document.createElement("p");

      // Adiciona a classe "frase" ao parágrafo
      paragrafo.classList.add("fundo");

      // Define o texto do parágrafo como a frase atual do array
      paragrafo.textContent = fundo[i];

      // Adiciona o parágrafo ao corpo da página
      body.appendChild(paragrafo);
  }