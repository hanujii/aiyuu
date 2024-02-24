document.addEventListener("DOMContentLoaded", function() {
    // Hamburger menu functionality
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const navLinks = document.querySelector(".nav-links");

    hamburgerMenu.addEventListener("click", function() {
        navLinks.classList.toggle("open");
    });

    // Typewriter effect for showcasing skills
    const skillsText = "Your skills text goes here";
    let index = 0;

    function typeWriter() {
        if (index < skillsText.length) {
            document.querySelector(".typewriter").textContent += skillsText.charAt(index);
            index++;
            setTimeout(typeWriter, 50);
        }
    }

    typeWriter();

    // Carousel functionality