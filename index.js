// Using HTML, Bootstrap, and JavaScript create a single page website that contains the following:
// A Bootstrap styled table representing your choice of data.
// A Bootstrap styled form that allows a user to add a new row to the table when clicking on submit.

// Select the form submit button using its ID and store it in the 'formButton' variable
let formButton = document.getElementById('formSubmit');


// Initialize a variable 'number' to keep track of the number of rows added to the table
let number = 0;


// Add an event listener to the 'formButton'. When the button is clicked, the function inside will run
formButton.addEventListener('click', (event) => {

    // Prevents the page from reloading every time the button is pushed
    event.preventDefault();

    // Get the values entered by the user in the form fields and store them in variables
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let zipCode = document.getElementById('zipCode').value;
    let phoneNumber = document.getElementById('phoneNumber').value;

    // Create a new table row (<tr>) to hold the user's input
    let newTableRow = document.createElement('tr');

    // Increment the 'number' variable by 1 to track the new row being added
    number++;

    // Create a new table cell (<td>) to display the current row number, and append it to the row
    let numberNode = document.createElement('td');
    numberNode.innerHTML = number;  // Set the cell content to the value of 'number'
    newTableRow.append(numberNode); // Add the number cell to the row


    // Create a new table cell for the 'firstName' input and append it to the row
    let firstNameNode = document.createElement('td');
    firstNameNode.innerHTML = firstName;  // Set the cell content to the first name value
    newTableRow.append(firstNameNode);    // Add the first name cell to the row

    
    let lastNameNode = document.createElement('td');
    lastNameNode.innerHTML = lastName;  
    newTableRow.append(lastNameNode);   

   
    let zipCodeNode = document.createElement('td');
    zipCodeNode.innerHTML = zipCode;  
    newTableRow.append(zipCodeNode); 

 
    let phoneNumberNode = document.createElement('td');
    phoneNumberNode.innerHTML = phoneNumber;  
    newTableRow.append(phoneNumberNode);      

    // Append the newly created row (with all the cells) to the table body (with ID 'tBody')
    document.getElementById('tBody').appendChild(newTableRow);

});
