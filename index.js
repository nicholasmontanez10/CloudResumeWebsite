const viewCountElement = document.getElementById('viewCount');
let views = localStorage.getItem('viewCounter') || 0;
views++;
localStorage.setItem('viewCounter', views);
viewCountElement.textContent = views;

function toggleExperience() {
    const experienceSection = document.querySelector('.resume-container');
    experienceSection.classList.toggle('active');
}