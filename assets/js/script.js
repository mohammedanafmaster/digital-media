'use strict';

// Add event listener on multiple elements
const addEventOnElements = (elements, eventType, callback) => {
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener(eventType, callback);
    }
}

// Header
const header = document.querySelector('[data-header]');
const navbar = document.querySelector('[data-navbar]');
const navToggler = document.querySelector('[data-nav-toggler]');
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = () => {
    navbar.classList.toggle("active");
    navToggler.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}

addEventOnElements([navToggler, overlay], "click", toggleNavbar);

window.onscroll = () => {
    if (window.scrollY > 100) {
        header.classList.add("active");
    }

    else {
        header.classList.remove("active");
    }
}

// Parallax Effect
const parallaxElements = document.querySelectorAll("[data-parallax]");

window.onmousemove = (event) => {
    for (let i = 0 ; i < parallaxElements.length ; i++) {
        const movementX = (event.clientX / window.innerWidth) * Number(parallaxElements[i].dataset.parallaxSpeed);
        const movementY = (event.clientY / window.innerHeight) * Number(parallaxElements[i].dataset.parallaxSpeed);

        parallaxElements[i].animate({
            transform: `translate(${movementX}px, ${movementY}px)`
        }, {duration: 500, fill: "forwards"});
    }
} 