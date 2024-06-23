function toggleDetails(id) {
    var details = document.getElementById(id);
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
    } else {
        details.style.display = "none";
    }
}



document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    fetch('projects.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(projects => {
            console.log('Projects loaded:', projects);
            const portfolioContainer = document.getElementById('portfolio-items');
            if (!portfolioContainer) {
                console.error('Portfolio container not found');
                return;
            }
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
