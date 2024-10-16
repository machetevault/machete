document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const demoUsername = 'admin';
    const demoPassword = 'admin';

    const user = document.getElementById('user').value;
    const pass = document.getElementById('pass').value;

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

setInterval(updateDateTime, 1000);
