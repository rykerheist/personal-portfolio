// Smooth Scrolling for Navigation Links
document.addEventListener('DOMContentLoaded', () => {
    const navList = document.querySelector('.nav-list');

    if (navList) {
        navList.addEventListener('click', (event) => {
            const link = event.target.closest('a.nav-link');
            if (link) {
                event.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    }

    // Shrinking Header on Scroll
    const header = document.querySelector('.site-header');

    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                header.classList.add('shrunken');
            } else {
                header.classList.remove('shrunken');
            }
        });
    }

    // Add/remove 'wrapped' class to process section based on wrapping
    const processSteps = document.getElementById("processSteps");

    function handleProcessWrapping() {
        if (!processSteps) return;

        const processStepsChildren = Array.from(processSteps.children);
        const containerWidth = processSteps.offsetWidth;

        let totalChildrenWidth = processStepsChildren.reduce((total, child) => {
            const style = window.getComputedStyle(child);
            const marginLeft = parseFloat(style.marginLeft);
            const marginRight = parseFloat(style.marginRight);
            return total + child.offsetWidth + marginLeft + marginRight;
        }, 0);

        if (totalChildrenWidth > containerWidth) {
            processSteps.classList.add("wrapped");
        } else {
            processSteps.classList.remove("wrapped");
        }
    }

    handleProcessWrapping();
    window.addEventListener("resize", handleProcessWrapping);

    // Mobile Menu Toggle
    const floatingMenuToggleContainer = document.querySelector('.floating-menu-toggle-container');
    const siteNav = document.querySelector('.site-nav');

    if (floatingMenuToggleContainer && siteNav) {
        floatingMenuToggleContainer.addEventListener('click', (event) => {
            // Prevent the click event from propagating to the document
            event.stopPropagation();

            const menuToggle = floatingMenuToggleContainer.querySelector('.menu-toggle');
            siteNav.classList.toggle('open');
            const isExpanded = siteNav.classList.contains('open');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });

        // Add an event listener to the document to close the menu when clicking outside
        document.addEventListener('click', (event) => {
            if (!siteNav.contains(event.target) && !floatingMenuToggleContainer.contains(event.target)) {
                siteNav.classList.remove('open');
                const menuToggle = floatingMenuToggleContainer.querySelector('.menu-toggle');
                menuToggle.setAttribute('aria-expanded', false);
            }
        });
    }

    // Particles.js Initialization
    if (document.getElementById("particles-js")) {
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                }
                // ... more particle settings ...
            },
            "interactivity": {
                // ... interactivity settings ...
            },
            "retina_detect": true
        });
    }

    // Form Submission Handling
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            if (validateForm()) {
                form.submit();
                form.reset();
                const successMessage = document.getElementById('form-success');
                if (successMessage) {
                    successMessage.textContent = 'Thank you! Your message has been sent.';
                }
            } else {
                console.error('Form validation failed');
            }
        });
    }

    // Validation Function
    function validateForm() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        let isValid = true;

        if (name.trim() === '') {
            document.getElementById('name-error').textContent = 'Please enter your name.';
            isValid = false;
        } else {
            document.getElementById('name-error').textContent = '';
        }

        if (email.trim() === '') {
            document.getElementById('email-error').textContent = 'Please enter your email.';
            isValid = false;
        } else if (!isValidEmail(email)) {
            document.getElementById('email-error').textContent = 'Please enter a valid email address.';
            isValid = false;
        } else {
            document.getElementById('email-error').textContent = '';
        }

        if (message.trim() === '') {
            document.getElementById('message-error').textContent = 'Please enter your message.';
            isValid = false;
        } else {
            document.getElementById('message-error').textContent = '';
        }

        return isValid;
    }

    // Helper function to validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // AOS Initialization
    AOS.init({
        once: false,
        offset: 200,
        duration: 800,
        easing: 'ease-in-out',
    });
});