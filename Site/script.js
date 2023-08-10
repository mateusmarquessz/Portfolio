// Selecionar todos os elementos com a classe "project"
const projects = document.querySelectorAll('.project');

// Adicionar um evento de mouseover para cada projeto
projects.forEach(project => {
  project.addEventListener('mouseover', () => {
    project.style.transform = 'scale(1.05)';
    project.style.transition = 'transform 0.3s ease';
  });

  // Remover a animação quando o mouse sair
  project.addEventListener('mouseout', () => {
    project.style.transform = 'scale(1)';
    project.style.transition = 'transform 0.3s ease';
  });
});
