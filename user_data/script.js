function togglePasswordVisibility() {
    const passwordField = document.getElementById('passwordField');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
}

function handleLogout() {
    localStorage.removeItem('currentUser'); // Clear the current user
    window.location.href = '../login/index.html'; // Redirect to login page
}

function handleDeleteAccount() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        localStorage.removeItem(currentUser); // Remove user data from localStorage
        localStorage.removeItem('currentUser'); // Clear the current user
        alert('Your account has been deleted.');
        window.location.href = '../login/index.html'; // Redirect to login page
    }
}

// Populate the user data page with stored information
document.addEventListener('DOMContentLoaded', function () {
    const currentUser = localStorage.getItem('currentUser');

    const storedUserData = JSON.parse(localStorage.getItem(currentUser));
    if (storedUserData) {
        document.getElementById('nameField').textContent = storedUserData.name;
        document.getElementById('surnameField').textContent = storedUserData.surname;
        document.getElementById('emailField').textContent = storedUserData.email;
        document.getElementById('passwordField').value = storedUserData.password;
    }
});
