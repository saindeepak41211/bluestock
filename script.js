document.getElementById('ipo-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const shares = document.getElementById('shares').value;

    alert(Thank you, ${name}, for expressing interest in purchasing ${shares} shares. We will contact you at ${email} with further details.);
    
    // Reset form fields
    document.getElementById('ipo-form').reset();
});