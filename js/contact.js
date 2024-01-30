// validation.js
console.log("jhadqj")
function validateForm() {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var phno = document.getElementById('phno').value.trim();
  
    if (name === '') {
      alert('Please enter your name');
      return false;
    }
//    ---------------------------------------------------------------------------------------------
var emailInput = document.getElementById('email');
var email = emailInput.value;

// Validate the email address
if (validateEmail(email)) {
    document.getElementById('email').textContent = "Email is valid!";
} else {
    document.getElementById('email').textContent = "Email is not valid!";
    }
 
function validateEmail(email) {
    var gmailRegex = /^[a-zA-Z0-9._-]+@gmail\.com$/;
    return gmailRegex.test(email);
}



// -----------------------------------------------------------------------------------------------------
    if (email === '') {
      alert('Please enter your email');
      return false;
    }
    // You can add more complex email validation if needed
  
    if (phno === '') {
      alert('Please enter your phone number');
      return false;
    }
  
    // You can add more complex phone number validation if needed
  
    return true; // If all validations pass, the form will be submitted
  }
  
//   function validateEmail(email) {
//     var gmailRegex = /^[a-zA-Z0-9._-]+@gmail\.com$/;
//     return gmailRegex.test(email);
// }

// // Handle form submission
// document.getElementById('emailForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form submission

//     // Get the email input value
//     var emailInput = document.getElementById('email');
//     var email = emailInput.value;

//     // Validate the email address
//     if (validateEmail(email)) {
//         document.getElementById('validationResult').textContent = "Email is valid!";
//     } else {
//         document.getElementById('validationResult').textContent = "Email is not valid!";
//     }
// });