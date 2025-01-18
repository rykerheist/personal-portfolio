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

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const siteNav = document.querySelector('.site-nav');

    if (menuToggle && siteNav) {
        menuToggle.addEventListener('click', () => {
            siteNav.classList.toggle('open');
            const isExpanded = siteNav.classList.contains('open');
            menuToggle.setAttribute('aria-expanded', isExpanded);
        });

        // Add an event listener to the document to close the menu when clicking outside
        document.addEventListener('click', (event) => {
            if (!siteNav.contains(event.target) && !menuToggle.contains(event.target)) {
                siteNav.classList.remove('open');
                menuToggle.setAttribute('aria-expanded', false);
            }
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

// Vanta.js Initialization
document.addEventListener('DOMContentLoaded', () => {
    const workSection = document.getElementById('work');
    const aboutSection = document.getElementById('about');
    const processSection = document.getElementById('process');
    const contactSection = document.getElementById('contact');

    if (workSection) {
        VANTA.NET({
            el: "#work",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x31f213,
            backgroundColor: 0x222222,
            points: 14.00,
            spacing: 14.00
        });
    }

    if (aboutSection) {
        VANTA.NET({
            el: "#about",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x31f213,
            backgroundColor: 0x222222,
            points: 14.00,
            spacing: 14.00
        });
    }

    if (processSection) {
        VANTA.NET({
            el: "#process",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x31f213,
            backgroundColor: 0x222222,
            points: 14.00,
            spacing: 14.00
        });
    }

    if (contactSection) {
        VANTA.NET({
            el: "#contact",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x31f213,
            backgroundColor: 0x222222,
            points: 14.00,
            spacing: 14.00
        });
    }
});

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
            "value": "#00ff00" // Neon green color
        },
        "shape": {
            "type": "image",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "images/Disruptive_icon.png", // Path to your logo image
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.8, // Adjust opacity as needed
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 50, // Adjust the size of the logo particles
            "random": true,
            "anim": {
                "enable": false,
                "speed": 20,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false, // Disable lines between particles
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false, // Disable hover effects
                "mode": "repulse"
            },
            "onclick": {
                "enable": false, // Disable click effects
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true,
    "background": {
        "color": "#000000", // Set the background to black
        "image": "",
        "position": "50% 50%",
        "repeat": "no-repeat",
        "size": "cover"
    }
});