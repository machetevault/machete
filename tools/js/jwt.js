function decodeToken() {
      const jwtInput = document.getElementById('jwtInput').value;
      try {
        const decodedHeader = jwt_decode(jwtInput, { header: true });
        const decodedPayload = jwt_decode(jwtInput);
        document.getElementById('headerEditor').textContent = JSON.stringify(decodedHeader, null, 4);
        document.getElementById('payloadEditor').textContent = JSON.stringify(decodedPayload, null, 4);
      } catch (error) {
        alert('Invalid JWT token!');
      }
}

function reencodeToken() {
      try {
        const editedHeader = JSON.parse(document.getElementById('headerEditor').textContent);
        const editedPayload = JSON.parse(document.getElementById('payloadEditor').textContent);

        const base64UrlEncode = (obj) => {
          return btoa(JSON.stringify(obj))
            .replace(/=/g, '')
            .replace(/\+/g, '-')
            .replace(/\//g, '_');
        };

        const encodedHeader = base64UrlEncode(editedHeader);
        const encodedPayload = base64UrlEncode(editedPayload);

        const newToken = `${encodedHeader}.${encodedPayload}.`;

        document.getElementById('newJwtOutput').textContent = newToken;
      } catch (error) {
        alert('Invalid JSON format!');
      }
}

function convertTimestampsToReadable() {
      const payloadEditor = document.getElementById('payloadEditor');
      try {
        const decodedPayload = JSON.parse(payloadEditor.textContent);
        const readablePayload = convertTimestamps(decodedPayload);
        payloadEditor.textContent = JSON.stringify(readablePayload, null, 4);
      } catch (error) {
        alert('Please decode the JWT first or ensure the payload is valid JSON!');
      }
}

function convertTimestamps(payload) {
      const keys = ['exp', 'iat', 'nbf'];
      for (const key of keys) {
        if (payload[key]) {
          payload[key] = {
            "timestamp": payload[key],
            "readable": new Date(payload[key] * 1000).toLocaleString(),
          };
        }
      }
      return payload;
}

function clearFields() {
      document.getElementById('jwtInput').value = '';
      document.getElementById('headerEditor').textContent = '';
      document.getElementById('payloadEditor').textContent = '';
      document.getElementById('newJwtOutput').textContent = '';
}
