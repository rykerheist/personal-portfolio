// Smooth Scrolling for Navigation Links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Check if the target element exists
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
});

// Form Submission Handling
const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get form data (basic example)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // You can use a service like EmailJS or a server-side script
    // to handle the form submission properly.
    // This is just a placeholder.

    // Validation (add more as needed)
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Example using a hypothetical sendEmail function
    sendEmail({ name, email, message })
        .then(() => {
            alert(`Thank you, ${name}! Your message has been sent.`);
            form.reset();
        })
        .catch((error) => {
            console.error('Error sending email:', error);
            alert('There was an error sending your message. Please try again later.');
        });
});

// Placeholder function for sending email (replace with actual implementation)
function sendEmail(data) {
    return new Promise((resolve, reject) => {
        // Simulate sending email (e.g., using EmailJS or AJAX)
        setTimeout(() => {
            // Simulate success or failure
            const success = true; // Change to false to test error handling

            if (success) {
                resolve();
            } else {
                reject(new Error('Failed to send email.'));
            }
        }, 1000);
    });
}