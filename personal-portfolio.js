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



// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

menuToggle.addEventListener("click", () => {
  siteNav.classList.toggle("open");

  // Update aria-expanded attribute for accessibility
  const expanded = siteNav.classList.contains("open");
  menuToggle.setAttribute("aria-expanded", expanded);
});

// ... (Rest of the JavaScript code) ...

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

// ... (Other JavaScript code) ...

// ... (Other JavaScript code) ...

// Add/remove 'wrapped' class to process section based on wrapping
const processSteps = document.getElementById("processSteps");

function handleProcessWrapping() {
  const processStepsChildren = processSteps.children;
  const containerWidth = processSteps.offsetWidth;
  let totalChildrenWidth = 0;

  for (let i = 0; i < processStepsChildren.length; i++) {
    totalChildrenWidth += processStepsChildren[i].offsetWidth;
  }

  if (totalChildrenWidth > containerWidth) {
    processSteps.classList.add("wrapped");
  } else {
    processSteps.classList.remove("wrapped");
  }
}

// Call initially and on window resize
handleProcessWrapping();
window.addEventListener("resize", handleProcessWrapping);