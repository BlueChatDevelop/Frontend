function handleSignup(event) {
    event.preventDefault(); // Prevent form submission

    // Get user data from the form
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Store user data in localStorage
    const userData = { name, surname, email, password };
    localStorage.setItem(email, JSON.stringify(userData));

    // Redirect to the user data page
    window.location.href = '../user_data/index.html';
}

function handleLogin(event) {
    event.preventDefault(); // Prevent form submission

    // Get login data from the form
    const email = document.getElementById('loginIdentifier').value;
    const loginPassword = document.getElementById('loginPassword').value;

    // Retrieve stored user data from localStorage using the email as the key
    const storedUserData = JSON.parse(localStorage.getItem(email));

    // Check if the credentials match
    if (
        storedUserData &&
        storedUserData.password === loginPassword
    ) {
        // Redirect to the user data page if credentials are correct
        localStorage.setItem('currentUser', email); // Store current user
        window.location.href = '../user_data/index.html';
    } else {
        alert('Incorrect email or password. Please try again.');
    }
}

