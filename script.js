const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navbg = document.querySelector('.nav-bg');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    navbg.classList.toggle('active');
});

function shortURL() {
    async function shortenURL() {
        const url = document.getElementById("url").value;
        const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);
        if (response.ok) {
            const data = await response.text();
            document.getElementById('result').innerHTML = `Shortened URL: <a href="${data}" target="_blank">${data}</a>`;
        } else {
            document.getElementById('result').innerHTML = "Error shortening URL";
        }
    }

    shortenURL();
}

function shortenUrl() {
    const originalUrl = document.getElementById('original-url').value;
    const customAlias = document.getElementById('custom-alias').value;

    // Validate custom alias
    if (!/^[a-zA-Z0-9]*$/.test(customAlias)) {
        alert('Custom alias can only contain alphanumeric characters.');
        return;
    }

    // Your logic to store original-url and custom-alias in a database
    // For demo purposes, we'll just concatenate them
    const shortenedUrl = `https://example.com/${originalUrl}/${customAlias}`;
    
    document.getElementById('shortened-url').textContent = shortenedUrl;}