        // View Counter Logic
        const viewCountElement = document.getElementById('viewCount');
        let views = localStorage.getItem('viewCounter') || 0;
        views++;
        localStorage.setItem('viewCounter', views);
        viewCountElement.textContent = views;

        // Toggle Section
        function toggleSection(sectionId) {
            const section = document.getElementById(sectionId);
            section.classList.toggle('active');
        }