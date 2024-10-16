  function showContent(contentId) {
            const contents = document.querySelectorAll('.content div');
            contents.forEach(content => {
                content.classList.remove('active');
            });
            document.getElementById(contentId).classList.add('active');
        }