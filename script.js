

// Mobile Menu Toggle
// Mobile Menu Toggle
// Mobile Menu Toggle
// Mobile Menu Toggle
// Mobile Menu Toggle
const menuToggle = document.getElementById("mobile-menu-toggle");
const headerNav = document.querySelector(".header-nav");

menuToggle.addEventListener("click", function () {
    headerNav.classList.toggle("active"); // Toggle mobile menu visibility
});
// Testimonial Slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll(".testimonial-card");
const prevButton = document.querySelector(".slider-controls .prev");
const nextButton = document.querySelector(".slider-controls .next");

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.remove("active");
        if (i === index) {
            testimonial.classList.add("active");
        }
    });
}

prevButton.addEventListener("click", function () {
    currentTestimonial = (currentTestimonial - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonial);
});

nextButton.addEventListener("click", function () {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
});

// Auto Slide Testimonials
setInterval(function () {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    showTestimonial(currentTestimonial);
}, 5000); // Change testimonial every 5 seconds

// Contact Form Validation
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form submission

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
    } else if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
    } else {
        alert("Form submitted successfully!");
        contactForm.reset(); // Reset form after submission
    }
});

// Email Validation Function
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
// Open Modal
document.getElementById('enrollForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Form submission ko rokna

    console.log('Form submitted!'); // Debugging ke liye

    // Form data submit karein
    fetch(this.action, {
        method: this.method,
        body: new FormData(this),
        headers: {
            'Accept': 'application/json'
        }
    }).then(function (response) {
        if (response.ok) {
            console.log('Form submitted successfully!'); // Debugging ke liye
            alert('Thank you for enrolling! We will contact you shortly.');
            document.getElementById('enrollForm').reset(); // Form ko reset karein
            modal.style.display = 'none'; // Modal close karein
        } else {
            console.log('Form submission failed!'); // Debugging ke liye
            alert('Failed to submit form. Please try again.');
        }
    }).catch(function (error) {
        console.log('Error:', error); // Debugging ke liye
        alert('An error occurred. Please try again.');
    });
});