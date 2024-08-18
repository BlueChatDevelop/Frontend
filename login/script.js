document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent form submission

    // Get login data from the form
    const email = document.getElementById('loginIdentifier').value;
    const loginPassword = document.getElementById('loginPassword').value;

    try {
        // Send login request to the API running on port 8000
        const response = await fetch('http://localhost:8000/api/authorization/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Email: email,
                Password: loginPassword
            })
        });

        const result = await response.json();

        // Check if the login was successful
        if (response.ok && result) {
            // Redirect to the user data page if credentials are correct
            window.location.href = '/user_data/';
        } else {
            alert('Incorrect email or password. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred during login. Please try again later.');
    }
});
