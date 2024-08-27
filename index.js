// Get visit count from local storage or set to 0
let visitCount = localStorage.getItem('visitCount') || 0;
visitCount = parseInt(visitCount);

// Update visit count on the webpage
const visitCountElement = document.getElementById('visit-count');
visitCountElement.textContent = visitCount;

// Increment visit count and update on the webpage
visitCount++;
localStorage.setItem('visitCount', visitCount.toString());

function toggleExperience() {
    const experienceSection = document.querySelector('.resume-container');
    experienceSection.classList.toggle('active');
}