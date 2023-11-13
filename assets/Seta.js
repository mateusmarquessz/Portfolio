document.addEventListener("DOMContentLoaded", function() {
    var arrow = document.querySelector('.work h2::after');
      if (arrow) {
          arrow.style.position = 'relative';
          arrow.style.top = '0';
        } else {
            console.error('Elemento não encontrado.');
          }
      });