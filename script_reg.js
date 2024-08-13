document.getElementById('reg1').addEventListener('submit', function(event) {
    event.preventDefault();

    clearErrors();

    // Get the value of each input field
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();

    let isValid = true;

    if (!/^[a-zA-Z\s]+$/.test(name)) {
        setError('name', "Name must contain only letters and spaces");
        isValid = false;
    }

    if (!validateEmail(email)) {
        setError('email', "Please enter a valid email");
        isValid = false;
    }

    if (password.length < 8) {
        setError('password', "Password must be at least 8 characters long");
        isValid = false;
    }

    if (isValid) {
        alert("Form Submitted Successfully");
        // Optionally, you could submit the form here
        // document.getElementById('reg1').submit();
    }
});

function setError(id, message) {
    const element = document.getElementById(id);
    const small = element.nextElementSibling;
    element.classList.add('error');
    small.innerText = message;
    small.style.display = 'block'; // Changed from visibility to display
}

function clearErrors() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.classList.remove('error');
        const small = input.nextElementSibling;
        small.style.display = 'none'; // Changed from visibility to display
    });
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
