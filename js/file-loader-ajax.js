

// Function to load scripts dynamically
async function loadScript(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to load script');
        }
        const scriptContent = await response.text();
        const script = document.createElement('script');
        script.textContent = scriptContent;
        document.head.appendChild(script);
    } catch (error) {
        console.error('Error loading script:', error);
    }
}

// Function to initialize script loading
async function init() {
    try {
        // List of JavaScript files to load
        const scripts = [
            './js/file-loader-ajax.js',
            './js/index.js',
            './js/main.js',
            './js/not-allowed.js',
            './js/page-transition.js',
            './js/script.js',
            './js/page-scroll-indicate.js',
            // Add more script paths as needed
        ];

        // Load all scripts asynchronously
        await Promise.all(scripts.map(loadScript));

        // Show the main content after scripts are loaded
        document.getElementById('main-content').style.display = 'block';
    } catch (error) {
        console.error('Error loading scripts:', error);
        // Handle error if needed
    }
}

// Start the initialization process
init();
