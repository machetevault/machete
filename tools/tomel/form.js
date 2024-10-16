document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Demo user credentials
    const demoUsername = 'b0ydC';
    const demoPassword = 'Enter00';

    // Get the input values
    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;

    // Check if the input values match the demo user credentials
    if (user === demoUsername && pass === demoPassword) {
        alert('Login successful!');
        window.location.href = 'panel.html';
    } else {
        document.getElementById('errorMessage').style.display = 'block';
    }
});

function updateDateTime() {
  const dateTimeElement = document.getElementById('dateTime');
  const now = new Date();
  const formattedTime = now.toLocaleTimeString();
  const formattedDate = now.toLocaleDateString();
  dateTimeElement.textContent = `Date: ${formattedDate} Time: ${formattedTime}`;
}

// Update date and time every second
setInterval(updateDateTime, 1000);