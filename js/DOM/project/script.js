document.getElementById('userForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form elements
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    
    // Reset previous errors
    clearErrors();
    
    // Validate inputs
    let isValid = true;
    
    if (!name.value.trim()) {
        showError('nameError', 'Name is required');
        name.classList.add('invalid');
        isValid = false;
    }
    
    if (!email.value.trim()) {
        showError('emailError', 'Email is required');
        email.classList.add('invalid');
        isValid = false;
    } else if (!isValidEmail(email.value)) {
        showError('emailError', 'Please enter a valid email');
        email.classList.add('invalid');
        isValid = false;
    }
    
    if (!phone.value.trim()) {
        showError('phoneError', 'Phone is required');
        phone.classList.add('invalid');
        isValid = false;
    } else if (!isValidPhone(phone.value)) {
        showError('phoneError', 'Please enter a valid phone number (Format: 03XX-XXXXXXX)');
        phone.classList.add('invalid');
        isValid = false;
    }
    
    if (isValid) {
        showSuccess();
    }
});

document.getElementById('phone').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove all non-digits
    
    if (value.length >= 4) {
        value = value.slice(0, 4) + '-' + value.slice(4);
    }
    
    e.target.value = value;
});

function clearErrors() {
    document.querySelectorAll('.error').forEach(error => error.textContent = '');
    document.querySelectorAll('input').forEach(input => input.classList.remove('invalid'));
}

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    if(elementId === 'phoneError' && !message.includes('required')) {
        errorElement.textContent = 'Please enter a valid phone number (Format: 03XX-XXXXXXX)';
    }
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
    // Format: 03XX-XXXXXXX
    const cleaned = phone.replace(/-/g, '');
    return /^03\d{9}$/.test(cleaned);
}

function showSuccess() {
    const form = document.getElementById('userForm');
    const successMessage = document.getElementById('successMessage');
    const previewData = document.getElementById('previewData');
    
    // Display preview data
    previewData.innerHTML = `
        <p><strong>Name:</strong> ${form.name.value}</p>
        <p><strong>Email:</strong> ${form.email.value}</p>
        <p><strong>Phone:</strong> ${form.phone.value}</p>
    `;
    
    // Hide form and show success message
    form.style.display = 'none';
    successMessage.classList.remove('hidden');
}
