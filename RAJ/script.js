// script.js

function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var formStatus = document.getElementById('formStatus');
    
    if (name == "" || email == "" || message == "") {
        formStatus.textContent = "Please fill out all fields.";
        formStatus.style.color = "red";
        return false;
    } else {
        formStatus.textContent = "Thank you for your message!";
        formStatus.style.color = "green";
        return true;
    }
}
