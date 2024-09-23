document.getElementById('supportForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Form data collection
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const issue = document.getElementById('issue').value;
    const message = document.getElementById('message').value;
    
    // Here, you would typically send this data to the server
    console.log(`Name: ${name}, Email: ${email}, Issue: ${issue}, Message: ${message}`);
    
    // Show confirmation message
    document.getElementById('supportForm').style.display = 'none';
    document.getElementById('confirmation').style.display = 'block';
});
