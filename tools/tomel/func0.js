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

document.getElementById('encodeButton').addEventListener('click', function () {
    const inputTexty = document.getElementById('inputT').value;
    const encodedText = btoa(inputTexty);
    document.getElementById('inputT').value = encodedText;
	document.getElementById('outputT').value = encodedText;
});

document.getElementById('decodeButton').addEventListener('click', function () {
    const inputTy = document.getElementById('inputT').value;
    try {
        const decodedText = atob(inputTy);
        document.getElementById('outputT').value = decodedText;
    } catch (error) {
        document.getElementById('outputT').value = 'Error: Invalid Base64 string';
    }
});

function replaceText() {
    const inputT_FR = document.getElementById('inputT_FR').value;
    const findWord = document.getElementById('findWord').value;
    const replaceWord = document.getElementById('replaceWord').value;

    if (!inputText || !findWord || !replaceWord) {
        alert("Please fill in all fields.");
        return;
}

    const regex = new RegExp(findWord, 'g');
    const modifiedText = inputT_FR.replace(regex, replaceWord);
    document.getElementById('modifiedText').textContent = modifiedText;
};

