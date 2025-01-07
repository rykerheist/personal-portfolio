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
window.addEventListener('scroll', () => {
  console.log("Scroll event triggered. ScrollY:", window.scrollY); // Debugging line
  if (window.scrollY > 0) {
    header.classList.add('shrunken');
    console.log("Header should be shrunken"); // Debugging line
  } else {
    header.classList.remove('shrunken');
    console.log("Header should not be shrunken"); // Debugging line
  }
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

menuToggle.addEventListener('click', () => {
    siteNav.classList.toggle('open');
    const isExpanded = siteNav.classList.contains('open');
    menuToggle.setAttribute('aria-expanded', isExpanded);
});

// Form Submission Handling
const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (validateForm()) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        (async () => {
            try {
                const response = await sendEmail({ name, email, message });
                console.log('Email sent successfully:', response);
                document.getElementById('form-success').textContent = `Thank you, ${name}! Your message has been sent.`;
                form.reset();
            } catch (error) {
                console.error('Error sending email:', error);
                alert('There was an error sending your message. Please try again later.');
            }
        })();
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

// Placeholder function for sending email (replace with actual implementation)
function sendEmail(data) {
    return new Promise((resolve, reject) => {
        console.log('Sending email with data:', data);

        setTimeout(() => {
            const success = true;

            if (success) {
                resolve({ status: 'success' });
            } else {
                reject(new Error('Failed to send email.'));
            }
        }, 1500);
    });
}