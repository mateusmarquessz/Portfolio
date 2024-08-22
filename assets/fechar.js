function closeMenu() {
    document.getElementById("click").checked = false;
}

async function fetchGitHubProjects() {
    const username = 'mateusmarquessz';
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await response.json();
    displayProjects(repos);
}

function displayProjects(repos) {
    const projectsContainer = document.querySelector('.card-container');

    repos.forEach(repo => {
        const projectCard = `
            <div class="card">
                <div class="front">
                    <h2>${repo.name}</h2>
                </div>
                <div class="back">
                    <p>${repo.description || 'Sem descrição'}</p>
                    <i>${repo.language || 'Linguagem não especificada'}</i>
                    <button onclick="openProjectLink('${repo.html_url}')">Ver Projeto</button>
                </div>
            </div>
        `;
        projectsContainer.innerHTML += projectCard;
    });
}

function openProjectLink(url) {
    window.open(url, '_blank');
}

// Chame a função para carregar os projetos quando a página for carregada
document.addEventListener('DOMContentLoaded', fetchGitHubProjects);
