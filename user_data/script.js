function togglePasswordVisibility() {
    const passwordField = document.getElementById('passwordField');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
}

// Populate the user data page with stored information
document.addEventListener('DOMContentLoaded', function () {
    const storedUserData = JSON.parse(localStorage.getItem('user'));

    if (storedUserData) {
        document.getElementById('nameField').textContent = storedUserData.name;
        document.getElementById('surnameField').textContent = storedUserData.surname;
        document.getElementById('emailField').textContent = storedUserData.email;
        document.getElementById('passwordField').value = storedUserData.password;
    } else {
        alert('No user data found. Please sign up or log in.');
        window.location.href = 'signup.html';
    }
});
