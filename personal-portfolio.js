// Smooth Scrolling for Navigation Links
const navList = document.querySelector('.nav-list');

navList.addEventListener('click', (event) => {
    if (event.target.classList.contains('nav-link')) {
        event.preventDefault();
        const targetId = event.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    }
});

// Shrinking Header on Scroll
const header = document.querySelector('.site-header');

// Check if the header element exists
if (header) {
    console.log("Header element found:", header);

    window.addEventListener('scroll', () => {
        console.log("Scroll event triggered. ScrollY:", window.scrollY);

        if (window.scrollY > 0) {
            console.log("Adding 'shrunken' class");
            header.classList.add('shrunken');
        } else {
            console.log("Removing 'shrunken' class");
            header.classList.remove('shrunken');
        }
    });
} else {
    console.error("Error: Could not find the header element with class 'site-header'.");
}

// Add/remove 'wrapped' class to process section based on wrapping
const processSteps = document.getElementById("processSteps");

function handleProcessWrapping() {
  const processStepsChildren = Array.from(processSteps.children);
  const containerWidth = processSteps.offsetWidth;

  // Calculate total width of children
  let totalChildrenWidth = processStepsChildren.reduce((total, child) => {
    const style = window.getComputedStyle(child);
    const marginLeft = parseFloat(style.marginLeft);
    const marginRight = parseFloat(style.marginRight);
    return total + child.offsetWidth + marginLeft + marginRight;
  }, 0);

  // Check if total width exceeds container width
  if (totalChildrenWidth >= containerWidth) {
    processSteps.classList.add("wrapped");
  } else {
    processSteps.classList.remove("wrapped");
  }
}

// Call initially and on window resize
handleProcessWrapping();
window.addEventListener("resize", handleProcessWrapping);

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

// Ensure menuToggle and siteNav are defined before adding the event listener
if (menuToggle && siteNav) {
    menuToggle.addEventListener('click', () => {
        siteNav.classList.toggle('open');
        const isExpanded = siteNav.classList.contains('open');
        menuToggle.setAttribute('aria-expanded', isExpanded);
    });
} else {
    console.error('Error: menuToggle or siteNav not found');
}

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
        },
        // ... more particle settings ...
    },
    "interactivity": {
        // ... interactivity settings ...
    },
    "retina_detect": true
});

// Form Submission Handling
const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Validate the form
    if (validateForm()) {
        // If validation passes, manually submit the form
        form.submit();

        // Reset the form after submission
        form.reset();

        // Display a success message
        document.getElementById('form-success').textContent = 'Thank you! Your message has been sent.';
    } else {
        // Handle the case where validation fails
        console.error('Form validation failed');
        // Optionally display an error message to the user
    }
});

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

AOS.init({
    once: false, // Allow animations to happen every time the element is in view
    offset: 200, // Offset the animation trigger point by 200 pixels
    duration: 800, // Set the animation duration to 800 milliseconds
    easing: 'ease-in-out', // Use a smoother easing function
});