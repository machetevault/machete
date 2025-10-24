function encodeBase64() {
            const text = document.getElementById('inputText').value;
            try {
                const encoded = btoa(unescape(encodeURIComponent(text)));
                document.getElementById('result').textContent = encoded;
            } catch (e) {
                document.getElementById('result').textContent = 'Invalid input for Base64 encoding.';
            }
        }

function decodeBase64() {
            const base64 = document.getElementById('inputBase64').value;
            try {
                const decoded = decodeURIComponent(escape(atob(base64)));
                document.getElementById('result').textContent = decoded;
            } catch (e) {
                document.getElementById('result').textContent = 'Invalid Base64 input for decoding.';
            }
        }

function clearFields() {
            document.getElementById('inputText').value = '';
            document.getElementById('inputBase64').value = '';
            document.getElementById('result').textContent = '';
        }

function goBack() {
            window.location.href = 'https://machetevault.com';
        }
