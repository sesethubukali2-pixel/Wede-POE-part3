// ======================================
// REGISTRATION FORM VALIDATION
// ======================================

const registrationForm = document.getElementById("registrationform");

if (registrationForm) {

    registrationForm.addEventListener("submit", function (event) {

        const name = document.getElementById("name").value.trim();
        const surname = document.getElementById("surname").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        // Check required fields
        if (name === "" || surname === "" || email === "" ||
            password === "" || confirmPassword === "") {

            event.preventDefault();
            alert("Please complete all required fields.");

        }

        // Check password length
        else if (password.length < 8) {

            event.preventDefault();
            alert("Password must be at least 8 characters long.");

        }

        // Check for capital letter
        else if (!/[A-Z]/.test(password)) {

            event.preventDefault();
            alert("Password must contain at least one capital letter.");

        }

        // Check for number
        else if (!/[0-9]/.test(password)) {

            event.preventDefault();
            alert("Password must contain at least one number.");

        }

        // Check for special character
        else if (!/[!@#$%^&*]/.test(password)) {

            event.preventDefault();
            alert("Password must contain at least one symbol.");

        }

        // Check password confirmation
        else if (password !== confirmPassword) {

            event.preventDefault();
            alert("Passwords do not match.");

        }

    });

}


// ======================================
// LOGIN SECTION
// ======================================

// Find the login button and login section
const loginBtn = document.getElementById("loginBtn");
const loginSection = document.getElementById("loginSection");

// Open the login section
if (loginBtn && loginSection) {

    loginBtn.addEventListener("click", function () {

        loginSection.style.display = "block";

        // Scroll down to show the login form
        loginSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

}


// ======================================
// CLOSE LOGIN SECTION
// ======================================

// Find the close button
const closeLogin = document.getElementById("closeLogin");

// Close the login section
if (closeLogin && loginSection) {

    closeLogin.addEventListener("click", function () {

        loginSection.style.display = "none";

    });

}