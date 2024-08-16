document.getElementById('email').addEventListener('submit', async function(event) {
  event.preventDefault(); // Prevent default form submission behavior

  const email = document.getElementById('email').value; // Get the email from the form
  const resultElement = document.getElementById('result'); // Element to display the result

  try {
    // Create URL with email as a query parameter
    const url = new URL('http://localhost:3000/api/authorization/check');
    url.searchParams.append('email', email);

    // Send GET request
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    // Check if the response is successful
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Parse JSON from the response
    const result = await response.json();

    // Update the element with the result
    resultElement.textContent = `Email valid: ${result}`;
  } catch (error) {
    console.error('Error:', error);
    resultElement.textContent = 'An error occurred while checking the email.';
  }
});

