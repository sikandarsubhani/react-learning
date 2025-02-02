function handleSignup(event) {
    event.preventDefault();

    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const userType = document.getElementById('userType').value;

    // Get existing users or initialize empty array
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // Check if user already exists
    if (users.find(user => user.email === email)) {
        alert('Email already registered!');
        return false;
    }

    // Add new user
    users.push({
        name,
        email,
        password,
        userType
    });

    // Save to localStorage
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful! Please login.');
    toggleForms('loginForm');
    return false;
}

function handleLogin(event) {
    event.preventDefault();

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Get users from localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // Find user
    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        // Store current user info
        localStorage.setItem('currentUser', JSON.stringify(user));
        // Redirect to index page
        window.location.href = 'index.html';
    } else {
        alert('Invalid credentials!');
    }
    return false;
}

function toggleForms(formId) {
    document.getElementById('loginForm').classList.remove('active');
    document.getElementById('signupForm').classList.remove('active');
    document.getElementById(formId).classList.add('active');
}
