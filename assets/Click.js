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