window.cipher = {
  // ... 
  encode: (offset, string) => {
    let resultado = ''; 
    const solucion = document.getElementById('solucion');
    
    for(let i = 0; i< string.length; i++) {
       
        const indice = string.charCodeAt(i); //indice en codigo ASCII//
        const nuevaLetra = String.fromCharCode(indice + offset); //obtengo la letra en la posicion dada//

       resultado = resultado + nuevaLetra
    }
    
    solucion.innerHTML= resultado
    

  },

  decode: (offset, string) => {

    const offsetNegativo = offset * -1;
    cipher.encode(offsetNegativo, string);

  }

};


