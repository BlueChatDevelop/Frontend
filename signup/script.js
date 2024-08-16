function handleSignup(event) {
    event.preventDefault(); // Prevent form submission

    // Get user data from the form
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Store user data in localStorage
    const userData = { name, surname, email, password };
    localStorage.setItem('user', JSON.stringify(userData));

    // Redirect to the user data page
    window.location.href = '../user_data/index.html';
}
