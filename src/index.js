const button1 = document.getElementById('botonCod');
const button2 = document.getElementById('botonDeco');
const solucion = document.getElementById('solucion');

button1.addEventListener('click', function(e) {
    e.preventDefault();
    const offsetStr = document.getElementById('offset').value;
    const offset = parseInt(offsetStr);
    const string = document.getElementById('string').value.toUpperCase();
    
    const resultado = cipher.encode(offset, string);
    solucion.innerHTML = resultado;
});

button2.addEventListener('click', function(e) {
    e.preventDefault();
    const offsetStr = document.getElementById('offset').value;
    const offset = parseInt(offsetStr);
    const string = document.getElementById('string').value.toUpperCase();
    
    const resultado = cipher.decode(offset, string);
    solucion.innerHTML = resultado;
});
