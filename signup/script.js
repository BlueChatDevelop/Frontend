async function handleSignup(event) {
    event.preventDefault(); // Prevent form submission

    // Get user data from the form
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        // Send signup request to the API
        const response = await fetch('http://localhost:8000/api/authorization/reg', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Name: name,
                Surname: surname,
                Email: email,
                Password: password
            })
        });

        const result = await response.json();

        // Check if the signup was successful
        if (response.ok && result) {
            // Redirect to the user data page if signup is successful
            window.location.href = '/user_data/';
        } else {
            alert('An account with this email already exists or registration failed. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred during signup. Please try again later.');
    }
}
