document.addEventListener('scroll', function() {
    const comingSoonContainer = document.getElementById('coming-soon-container');
    if (comingSoonContainer.getBoundingClientRect().top < window.innerHeight) {
        loadMoreProjects();
    }
});

function loadMoreProjects() {
    const comingSoonContainer = document.getElementById('coming-soon-container');
    if (!comingSoonContainer.innerHTML) {
        comingSoonContainer.innerHTML = `
            <div class="project">
                <img id="imgtr" src="https://placehold.co/600x400/fff/fff.png" alt="Coming Soon">
                <p>Coming Soon</p>
            </div>
            <div class="project">
                <img src="https://placehold.co/600x400/254bf3/254bf3.png" alt="Coming Soon">
                <p>Coming Soon</p>
            </div>
        `;
        const projects = comingSoonContainer.querySelectorAll('.project');
        projects.forEach((project, index) => {
            setTimeout(() => {
                project.classList.add('visible');
            }, index * 300); // Atraso de 300ms entre cada projeto
        });
    }
}

