const button1 = document.getElementById('botonCod');
const button2 = document.getElementById('botonDeco');


button1.addEventListener('click', function(e) {
    e.preventDefault();
    const offsetStr = document.getElementById('offset').value;
    const offset = parseInt(offsetStr);
    const string = document.getElementById('string').value.toUpperCase();
    
    cipher.encode(offset, string)
});

button2.addEventListener('click', function(e) {
    e.preventDefault();
    const offsetStr = document.getElementById('offset').value;
    const offset = parseInt(offsetStr);
    const string = document.getElementById('string').value;
    
    cipher.decode(offset, string)
});

