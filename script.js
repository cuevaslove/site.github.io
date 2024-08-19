// Typewriter effect for the center text
function typewriterEffect(text, elementId, speed) {
    let i = 0;
    const element = document.getElementById(elementId);
    if (!element) {
        return; // Return early if the element is not found
    }

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            // Remove the caret after typing is complete
            element.style.borderRight = 'none';
        }
    }
    type();
}

// Initialize the typewriter effect for the center text
document.addEventListener('DOMContentLoaded', function() {
    typewriterEffect('Contemplative Photography Imagery', 'nav-center-text', 100);
});

// Animation for Slider and Dots
document.addEventListener('DOMContentLoaded', function() {
    const sliderContainer = document.querySelector('.slider-container');
    const dots = document.querySelectorAll('.dot');

    // Ensure slider grows in on page load
    setTimeout(() => {
        sliderContainer.classList.add('visible');
    }, 100);

    // Trigger dots slide-in animation
    dots.forEach((dot, index) => {
        setTimeout(() => {
            dot.classList.add('visible');
        }, index * 200);
    });
});

// Image Slider Functionality
let currentSlideIndex = 0;
const slides = document.querySelectorAll('.slides img');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = index;
    }

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        dots[i].classList.remove('active');
    });

    slides[currentSlideIndex].classList.add('active');
    dots[currentSlideIndex].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlideIndex + 1);
}

function currentSlide(index) {
    showSlide(index - 1);
}

let slideInterval = setInterval(nextSlide, 5000);

document.querySelector('.slider-container').addEventListener('mouseenter', function() {
    clearInterval(slideInterval);
});

document.querySelector('.slider-container').addEventListener('mouseleave', function() {
    slideInterval = setInterval(nextSlide, 5000);
});

showSlide(currentSlideIndex); // Initialize with the first slide active

// Smooth Scroll for Sections
document.querySelectorAll('a[href="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to toggle the navigation menu on smaller screens
function toggleMenu() {
    const menu = document.querySelector('.nav-menu');
    menu.classList.toggle('active');
}

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.querySelector('.nav-menu');
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
        }
    });
});

function revealOnLoadOrScroll() {
    const aboutSection = document.querySelector('.about-section');
    const contactSection = document.querySelector('.contact-section');

    const windowHeight = window.innerHeight;
    const revealPoint = 150;

    const aboutTop = aboutSection.getBoundingClientRect().top;
    const contactTop = contactSection.getBoundingClientRect().top;

    // For small screens, make "About Us" visible immediately
    if (window.innerWidth <= 768) {
        aboutSection.classList.add('visible');
    } else {
        // For larger screens, fade in "About Us" on scroll
        if (aboutTop < windowHeight - revealPoint) {
            aboutSection.classList.add('visible');
        }
    }

    // Always reveal "Contact Us" on scroll
    if (contactTop < windowHeight - revealPoint) {
        contactSection.classList.add('visible');
    }
}

// Check for visibility on page load and on scroll
window.addEventListener('scroll', revealOnLoadOrScroll);
window.addEventListener('load', revealOnLoadOrScroll);

showSlide(currentSlideIndex);
