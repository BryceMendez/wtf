document.addEventListener("DOMContentLoaded", function () {
    var sideNavbar = document.getElementById("navbar");
    var closeSidebarButton = document.getElementById("close-sidebar");

    closeSidebarButton.addEventListener("click", function () {
        sideNavbar.classList.add("hidden");
    });
});

function toggleSidebar() {
    var navbar = document.getElementById('navbar');
    navbar.classList.toggle('hidden');
}