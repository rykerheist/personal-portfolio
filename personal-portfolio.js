// Form Submission Handling (Still a basic example - use a service like EmailJS for real implementation)
const form = document.getElementById('contact-form');
form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    // ... (Get form data - same as before)

    // ... (Send form data to your server or use EmailJS) 

    alert(`Thank you, ${name}! Your message has been sent.`);
    form.reset();
});

// Optional: Smooth Scrolling for Navigation Links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' }); 
    });
});