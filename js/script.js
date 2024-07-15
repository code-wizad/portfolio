document.addEventListener("DOMContentLoaded", function() {
    const preloader = document.getElementById("preloader");
    const content = document.getElementById("content");

    function checkIfLoaded() {
        if (document.readyState === "complete") {
            clearInterval(loadingInterval);
            preloader.style.display = "none";
            content.style.display = "block";
        }
    }

    const loadingInterval = setInterval(checkIfLoaded, 1000);
    checkIfLoaded();
});