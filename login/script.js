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
    window.location.href = 'user_data.html';
}

function handleLogin(event) {
    event.preventDefault(); // Prevent form submission

    // Get login data from the form
    const loginIdentifier = document.getElementById('loginIdentifier').value;
    const loginPassword = document.getElementById('loginPassword').value;

    // Retrieve stored user data from localStorage
    const storedUserData = JSON.parse(localStorage.getItem('user'));

    // Check if the credentials match
    if (
        (storedUserData.email === loginIdentifier || storedUserData.name === loginIdentifier) &&
        storedUserData.password === loginPassword
    ) {
        // Redirect to the user data page if credentials are correct
        window.location.href = '../user_data/index.html';
    } else {
        alert('Incorrect email/name or password. Please try again.');
    }
}
