// Smooth Scrolling for Navigation Links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

menuToggle.addEventListener('click', () => {
    siteNav.classList.toggle('open');

    // Toggle aria-expanded attribute for accessibility
    const isExpanded = siteNav.classList.contains('open');
    menuToggle.setAttribute('aria-expanded', isExpanded);

    // Focus management (accessibility)
    if (isExpanded) {
        // Move focus to the first focusable element in the menu
        const firstNavLink = siteNav.querySelector('.nav-link');
        if (firstNavLink) {
            firstNavLink.focus();
        }
    } else {
        // Move focus back to the menu toggle
        menuToggle.focus();
    }
});

// Form Submission Handling
const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get form data 
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validation
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

    if (!isValid) {
        return;
    }

    // Placeholder for sending email (replace with actual implementation)
    // Example using a hypothetical sendEmail function (async/await for clarity)
    (async () => {
        try {
            const response = await sendEmail({ name, email, message }); // Assuming sendEmail returns a response
            console.log('Email sent successfully:', response);
            document.getElementById('form-success').textContent = `Thank you, ${name}! Your message has been sent.`;
            form.reset();
        } catch (error) {
            console.error('Error sending email:', error);
            alert('There was an error sending your message. Please try again later.');
        }
    })();
});

// Helper function to validate email format (using a simple regex)
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Placeholder function for sending email (replace with actual implementation)
function sendEmail(data) {
    // Simulate sending email (e.g., using EmailJS or AJAX)
    return new Promise((resolve, reject) => {
        // Replace this with your actual email sending logic
        console.log('Sending email with data:', data);

        // Simulate API call delay
        setTimeout(() => {
            // Simulate success (replace with actual success/failure logic)
            const success = true;

            if (success) {
                resolve({ status: 'success' }); // Resolve with a response object
            } else {
                reject(new Error('Failed to send email.'));
            }
        }, 1500); // Simulate 1.5-second delay
    });
}