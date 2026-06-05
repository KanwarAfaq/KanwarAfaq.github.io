document.addEventListener("DOMContentLoaded", function() {
    // Load Header
    fetch("header.html")
        .then(response => response.text())
        .then(data => document.getElementById("header-placeholder").innerHTML = data);

    // Load Sidebar
    fetch("sidebar.html")
        .then(response => response.text())
        .then(data => document.getElementById("sidebar-placeholder").innerHTML = data);

    // Load Footer
    fetch("footer.html")
        .then(response => response.text())
        .then(data => document.getElementById("footer-placeholder").innerHTML = data);
});