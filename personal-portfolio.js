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
        siteNav.classList.toggle("open");
        const isExpanded = siteNav.classList.contains('open');
        menuToggle.setAttribute('aria-expanded', isExpanded);
    });
} else {
    console.error('Error: menuToggle or siteNav not found');
}

// Form Submission Handling
const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (validateForm()) {
        // If validation passes, submit the form
        form.submit();

        // Reset the form
        form.reset();

        // Display success message
        document.getElementById('form-success').textContent = `Thank you! Your message has been sent.`;
    } else {
        console.error('Form validation failed');
        // Handle the case where validation fails, if necessary
    }
});
