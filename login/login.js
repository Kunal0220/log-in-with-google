function handleGoogleClientLoad() {
    gapi.load('auth2', function () {
        gapi.auth2.init({
            client_id: '191828679769-6tl4lf4tfmn0dg88uq6v7ips379a9dkt.apps.googleusercontent.com'
        });
    });
}

function handleCredentialResponse(response) {
    const credential = response.credential;
    // Send the credential to your server for verification and user login
    // You can use AJAX or fetch to send the credential to your server
    // For example:
    // fetch('/login', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({ credential })
    // }).then(response => {
    //   // Handle the response from the server
    // });
}

// document.getElementById("google-login").addEventListener("click", handleSignInClick);
