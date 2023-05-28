

// HTML elements

addStudent = () => {
    let first = document.getElementById("first").value
    let email = document.getElementById("email").value
    let number = document.getElementById("number").value
    let password = document.getElementById("password").value
    let subject = document.getElementById("subject").value
}


// Event listener for form submission
form.addform ("submit", function(event) {
  event.preventDefault(); // Prevent form from submitting and page refresh
  
  // Get input values
  const name = nameInput.value;
  const email = emailInput.value;
  const number = numberInput.value;
  
  // Validate input
  if (name === '' || email === '' || number === '') {
    alert('Please select the checkbox');
    return;
  }
  
  // Create student object
  const student = {
    name: name,
    email: email,
    number: number
  };
  
  // Do something with the student data
  console.log(student);
  
  // Clear form
  form.reset();
});

