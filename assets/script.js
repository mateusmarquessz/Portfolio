document.addEventListener("DOMContentLoaded", function () {
  let fundos = document.querySelectorAll(".fundo");

  fundos.forEach(function (fundo, index) {
    setTimeout(function () {
      fundo.style.opacity = "1";

      fundo.classList.add(index % 2 === 0 ? "movimento-direita" : "movimento-esquerda");
    }, Math.random() * 2000);
  });

  const fundoText = ["HI, I'M MATEUS", "HI, I'M MATEUS", "HI, I'M MATEUS", "HI, I'M MATEUS", "HI, I'M MATEUS", "HI, I'M MATEUS", "HI, I'M MATEUS", "HI, I'M MATEUS", "HI, I'M MATEUS", "HI, I'M MATEUS", "I'M MATEUS"];
  const body = document.body;

  for (let i = 0; i < fundoText.length; i++) {
    const paragrafo = document.createElement("p");
    paragrafo.classList.add("fundo");

    if (i % 2 === 0) {
      paragrafo.classList.add("left");
    }

    const partes = fundoText[i].split(" ");

    partes.forEach((parte, index) => {
      const span = document.createElement("span");
      span.textContent = parte;

      if (parte === "MATEUS") {
        span.classList.add("nome-mateus");
      }

      paragrafo.appendChild(span);

      if (index < partes.length - 1) {
        paragrafo.appendChild(document.createTextNode(" "));
      }
    });

    body.appendChild(paragrafo);
  }
});


//Click
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