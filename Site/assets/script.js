document.addEventListener("DOMContentLoaded", function() {
  var fundos = document.querySelectorAll(".fundo");

  fundos.forEach(function(fundo) {
      setTimeout(function() {
          fundo.style.opacity = "1";

          fundo.classList.add(Math.random() > 0.5 ? "movimento-direita" : "movimento-esquerda");
      }, Math.random() * 2000);
  });
});

var fundo = ["HI, I'M MATEUS", "HI, I'M MATEUS", "HI, I'M MATEUS","HI, I'M MATEUS", "HI, I'M MATEUS", "HI, I'M MATEUS","HI, I'M MATEUS", "HI, I'M MATEUS", "HI, I'M MATEUS","HI, I'M MATEUS", "HI, I'M MATEUS"];

var body = document.body;

for (var i = 0; i < fundo.length; i++) {
  var paragrafo = document.createElement("p");
  paragrafo.classList.add("fundo");

  // Adiciona a classe "left" para metade das frases
  if (i % 2 === 0) {
    paragrafo.classList.add("left");
  }

  paragrafo.textContent = fundo[i];
  body.appendChild(paragrafo);
}

  document.addEventListener('DOMContentLoaded', function() {
    var workDiv = document.querySelector('.work');

    workDiv.addEventListener('click', function() {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
    });
  });

        document.addEventListener("DOMContentLoaded", function() {
            var arrow = document.querySelector('.work h2::after');
            if (arrow) {
                arrow.style.position = 'relative';
                arrow.style.top = '0';
            } else {
                console.error('Elemento não encontrado.');
            }
        });