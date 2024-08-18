function togglePasswordVisibility() {
    const passwordField = document.getElementById('passwordField');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
}

async function handleLogout() {
    try {
        await fetch('http://localhost:8000/api/authorization/logout', {
            method: 'POST',
            credentials: 'include'
        });
        window.location.href = '/login/';
    } catch (error) {
        console.error('Error during logout:', error);
    }
}

async function handleDeleteAccount() {
    try {
        const response = await fetch('http://localhost:8000/api/authorization/delete', {
            method: 'DELETE',
            credentials: 'include'
        });

        if (response.ok) {
            alert('Your account has been deleted.');
            window.location.href = '/login/';
        } else {
            alert('Error deleting account. Please try again.');
        }
    } catch (error) {
        console.error('Error deleting account:', error);
    }
}

async function loadUserData() {
    try {
        const response = await fetch('http://localhost:8000/api/authorization/getuserinfo',{
            method: 'GET',
            credentials: 'include'
        });
        if (response.ok) {
            const userData = await response.json();
            document.getElementById('nameField').textContent = userData.name;
            document.getElementById('surnameField').textContent = userData.surname;
            document.getElementById('emailField').textContent = userData.email;
            document.getElementById('passwordField').value = userData.password;
        } else {
            alert('Failed to load user data. Redirecting to login.');
            window.location.href = '/login/';
        }
    } catch (error) {
        console.error('Error loading user data:', error);
        alert('An error occurred. Redirecting to login.');
        window.location.href = '/login/';
    }
}

document.addEventListener('DOMContentLoaded', loadUserData);