"use strict";
// Show Menu
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
// Menu Show
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}
// Menu Hidden
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}
// Remove Menu Mobile
const navLink = document.querySelectorAll('.nav-menu');
const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
};
navLink.forEach((n) => n.addEventListener('click', linkAction));
// Add Blur Header
const blurHeader = () => {
    const header = document.getElementById('header');
    // Add a class if the bottom offset is greater than 50 of the ....
    window.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header');
};
window.addEventListener('scroll', blurHeader);
// Email Submit
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');
const sendEmail = (e) => {
    e.preventDefault();
    // Simulate successful email sending
    contactMessage.textContent = 'Message sent successfully ✅';
    // Remove message after five seconds
    setTimeout(() => {
        contactMessage.textContent = '';
    }, 5000);
    // Clear input fields
    contactForm.reset();
};
contactForm.addEventListener('submit', sendEmail);
// Show Scroll Up
const scrollUp = () => {
    const scrollUpElement = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the
    window.scrollY >= 350 ? scrollUpElement.classList.add('show-scroll') : scrollUpElement.classList.remove('show-scroll');
};
window.addEventListener('scroll', scrollUp);
// Scroll Sections Active Link
const section = document.querySelectorAll('section[id]');
const scrollActive = () => {
    const scrollDown = window.scrollY;
    section.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link');
        }
        else {
            sectionsClass.classList.remove('active-link');
        }
    });
};
window.addEventListener('scroll', scrollActive);
