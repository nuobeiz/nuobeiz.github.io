function toggleDetails(id) {
    var details = document.getElementById(id);
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    fetch('projects.json')
        .then(response => response.json())
        .then(projects => {
            const portfolioContainer = document.getElementById('portfolio-items');
            projects.forEach(project => {
                const projectElement = document.createElement('div');
                projectElement.classList.add('portfolio-item');
                projectElement.innerHTML = `
                    <h3>${project.title}</h3>
                    <a href="${project.link}" target="_blank">
                        <img src="${project.image}" alt="${project.title}">
                    </a>
                    <p>${project.description}</p>
                `;
                portfolioContainer.appendChild(projectElement);
            });
        })
        .catch(error => console.error('Error fetching the projects:', error));
});
