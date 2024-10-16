 function showContent(contentId) {
            const contents = document.querySelectorAll('.content div');
            contents.forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(contentId).classList.add('active');
 };
  
 function reloadPage() {
            location.reload();
 };
 
 function logout() {
            window.location.href = 'login.html';
 };
 
 function copyText() {
            const ccText = document.getElementById('outputT').value;    
            document.getElementById('inputT_FR').value = ccText;
};

function formatCode() {
            const inputCode = document.getElementById('inputCode').value;
            const formattedCode = js_beautify(inputCode);
            document.getElementById('outputCode').value = formattedCode;
};
		