// JavaScript for Sliding Navigation Bar and Smooth Scroll

// Hide or Show Navbar on Scroll
let lastScrollTop = 0;
const navbar = document.querySelector("header");

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        navbar.style.top = "-80px"; // Hide navbar
    } else {
        navbar.style.top = "0"; // Show navbar
    }
    lastScrollTop = currentScroll;
});

// Smooth Scroll for Navigation Links
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - navbar.offsetHeight,
            behavior: "smooth",
        });
    });
});