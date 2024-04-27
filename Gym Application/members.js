

const form = document.querySelector('.row.g-3');

// Add event listener for form submission
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

    // Collect form data
    const formData = new FormData(form);

    // Convert form data to JSON object
    const jsonData = {};
    formData.forEach((value, key) => {
        jsonData[key] = value;
    });

    // Send form data to backend
    fetch('/api/add_member', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
    })
    .then(response => response.json())
    .then(data => {
        // Handle response from backend if needed
        console.log('Response from backend:', data);
        // Optionally, display a success message or redirect to another page
    })
    .catch(error => {
        console.error('Error submitting form:', error);
        // Handle error if submission fails
    });
});