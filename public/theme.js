// Theme management for dark/light mode
(function() {
    // Apply theme from localStorage or default to dark
    function applyTheme(theme) {
        if (theme === 'light') {
            document.documentElement.classList.add('light-mode');
            document.documentElement.classList.remove('dark-mode');
        } else {
            document.documentElement.classList.add('dark-mode');
            document.documentElement.classList.remove('light-mode');
        }
    }

    // Get saved theme or default to 'dark'
    function getSavedTheme() {
        return localStorage.getItem('theme') || 'dark';
    }

    // Save theme preference
    function saveTheme(theme) {
        localStorage.setItem('theme', theme);
    }

    // Toggle between light and dark themes
    function toggleTheme() {
        var currentTheme = getSavedTheme();
        var newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        saveTheme(newTheme);
        applyTheme(newTheme);
        updateToggleButton(newTheme);
    }

    // Update toggle button icon/text
    function updateToggleButton(theme) {
        var btn = document.getElementById('theme-toggle');
        if (btn) {
            if (theme === 'light') {
                btn.innerHTML = '🌙 Dark Mode';
            } else {
                btn.innerHTML = '☀️ Light Mode';
            }
        }
    }

    // Initialize theme on page load
    function initTheme() {
        var savedTheme = getSavedTheme();
        applyTheme(savedTheme);
        updateToggleButton(savedTheme);

        // Attach click handler to toggle button
        var btn = document.getElementById('theme-toggle');
        if (btn) {
            btn.addEventListener('click', toggleTheme);
        }
    }

    // Apply theme immediately to prevent flash
    applyTheme(getSavedTheme());

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTheme);
    } else {
        initTheme();
    }
})();
