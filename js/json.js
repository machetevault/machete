function formatJson() {
    const jsonText = document.getElementById('inputJson').value;
        try {
              const jsonObject = JSON.parse(jsonText);
              const formattedJson = JSON.stringify(jsonObject, null, 4);
              document.getElementById('result').textContent = formattedJson;
        } catch (e) {
              document.getElementById('result').textContent = 'Invalid JSON input. Please check your syntax and try again.';
        }
}

function clearFields() {
            document.getElementById('inputJson').value = '';
            document.getElementById('result').textContent = '';
}

function goBack() {
            window.location.href = 'https://machetevault.com';
}
