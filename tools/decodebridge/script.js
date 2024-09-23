document.getElementById('formatButton').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;

    let outputText = '';
    try {
        const jsonObject = JSON.parse(inputText);
        outputText = JSON.stringify(jsonObject, null, 4); // Format JSON with 4 spaces indentation
    } catch (error) {
        outputText = `Error: Invalid JSON data\n${error.message}`;
    }

    document.getElementById('outputText').value = outputText;
});

document.getElementById('clearButton').addEventListener('click', () => {
    document.getElementById('inputText').value = '';
    document.getElementById('outputText').value = '';
	document.getElementById('inputT').value = '';
	document.getElementById('outputT').value = '';
	document.getElementById('inputD').value = '';
	document.getElementById('outputD').value = '';
});

document.getElementById('encodeButton').addEventListener('click', function () {
    const inputText = document.getElementById('inputText').value;
    const encodedText = btoa(inputText);
    document.getElementById('inputT').value = encodedText;
});

document.getElementById('decodeButton').addEventListener('click', function () {
    const inputT = document.getElementById('inputT').value;
    try {
        const decodedText = atob(inputT);
        document.getElementById('outputT').value = decodedText;
    } catch (error) {
        document.getElementById('outputT').value = 'Error: Invalid Base64 string';
    }
});