async function checkAuthorization() {
    try {
        const response = await fetch('http://localhost:8000/api/authorization/isAuthenticated');
        const isAuthenticated = await response.json();

        if (isAuthenticated) {
            window.location.href = '/user_data/';
        }
    } catch (error) {
        console.error('Error checking authorization:', error);
    }
}

function redirectToSignUp() {
    checkAuthorization().then(() => {
        window.location.href = '/signup/';
    });
}

function redirectToLogin() {
    checkAuthorization().then(() => {
        window.location.href = '/login/';
    });
}