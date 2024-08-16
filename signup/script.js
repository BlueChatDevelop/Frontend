function handleSignup(event) {
    event.preventDefault(); // Prevent form submission

    // Get user data from the form
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Check if the email already exists
    if (localStorage.getItem(email)) {
        alert('An account with this email already exists.');
        return;
    }

    // Store user data in localStorage
    const userData = { name, surname, email, password };
    localStorage.setItem(email, JSON.stringify(userData));

    // Redirect to the user data page
    window.location.href = '../user_data/index.html';
}

