function beautifyCode() {
            const input = document.getElementById('input').value;
            const beautifiedCode = js_beautify(input, { indent_size: 2 });
            document.getElementById('output').value = beautifiedCode;
}

function clearTextAreas() {
            document.getElementById('input').value = '';
            document.getElementById('output').value = '';
}

function goBack() {
            window.location.href = 'https://machetevault.com';
}
