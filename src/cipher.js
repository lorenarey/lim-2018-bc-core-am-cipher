window.cipher = {
  // ... 
  encode: (offset, string) => {
    let resultado = ''; 
    const solucion = document.getElementById('solucion');
    
    for(let i = 0; i< string.length; i++) {
       
        const indice = string.charCodeAt(i);
        const nuevaLetra = String.fromCharCode(indice + offset);

       resultado = resultado + nuevaLetra
    }
    console.log(resultado);
    solucion.innerHTML= resultado
    

  },

  decode: (offset, string) => {

    const offsetNegativo = offset * -1;
    cipher.encode(offsetNegativo, string);

  }

};
