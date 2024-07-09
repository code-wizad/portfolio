let searchBarFocused = false; // Track whether search bar is currently focused
let homeFocused = false; // Track whether home element is currently focused

// Function to handle keydown events
function handleKeyDown(event) {
    if (event.ctrlKey || event.metaKey) {
        if (event.key === 's') {
            event.preventDefault(); // Prevent default browser action (usually saving the page)
            toggleFocusSearchBar(); // Toggle focus on the search bar
        } else if (event.key === 'h') {
            event.preventDefault(); // Prevent default browser action (like opening history)
            toggleFocusHome(); // Toggle focus on the home element
        }
        // Add more else if statements for other shortcuts if needed
    }
}

// Function to toggle focus on the search bar
function toggleFocusSearchBar() {
    const searchBar = document.getElementById('searchBar');
    if (searchBar) {
        if (!searchBarFocused) {
            searchBar.focus(); // Focus on the search bar
            searchBarFocused = true; // Update focus state
        } else {
            searchBar.blur(); // Unfocus the search bar
            searchBarFocused = false; // Update focus state
        }
    }
}

// Function to toggle focus on the home element
function toggleFocusHome() {
    const homeElement = document.getElementById('home');
    if (homeElement) {
        if (!homeFocused) {
            homeElement.focus(); // Focus on the home element
            homeFocused = true; // Update focus state
        } else {
            homeElement.blur(); // Unfocus the home element
            homeFocused = false; // Update focus state
        }
    }
}

// Event listener for keydown events on the document
document.addEventListener('keydown', handleKeyDown);
