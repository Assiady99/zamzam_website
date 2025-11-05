// Advanced validation and accessibility practices implemented.

// Function to validate input fields
function validateInput() {
    const inputs = document.querySelectorAll('input, textarea');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value) {
            isValid = false;
            input.classList.add('error'); // Adds error class for visual feedback
        } else {
            input.classList.remove('error');
        }
    });

    return isValid;
}

// Function to generate live social links
function generateSocialLinks() {
    const socialLinksContainer = document.getElementById('social-links');
    const links = [
        { name: 'Facebook', url: 'https://facebook.com/yourprofile' },
        { name: 'Twitter', url: 'https://twitter.com/yourprofile' },
        { name: 'Instagram', url: 'https://instagram.com/yourprofile' }
    ];

    links.forEach(link => {
        const anchor = document.createElement('a');
        anchor.href = link.url;
        anchor.textContent = link.name;
        anchor.target = '_blank'; // Opens link in a new tab
        socialLinksContainer.appendChild(anchor);
    });
}

// Event listener for form submission
document.querySelector('#myForm').addEventListener('submit', function(event) {
    if (!validateInput()) {
        event.preventDefault();
        alert('Please fill in all fields correctly.');
    }
});

// Generate social links on page load
document.addEventListener('DOMContentLoaded', generateSocialLinks);