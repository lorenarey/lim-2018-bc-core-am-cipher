window.cipher = {
  // ... 
  encode: (offset, string) => {
    let resultado = ''; 
    const solucion = document.getElementById('solucion');
    
    for(let i = 0; i< string.length; i++) {
      const indice = string.charCodeAt(i);

      if (indice >= 65 && indice <= 90) {
        let nuevoIndiceAscii = (indice - 65 + offset) % 26 + 65;
          
        if (nuevoIndiceAscii < 65 ) {
          nuevoIndiceAscii = nuevoIndiceAscii + 26
        }

        const nuevaLetra = String.fromCharCode(nuevoIndiceAscii); //obtengo la letra en la posicion dada//
        resultado = resultado + nuevaLetra        
      } else {
        resultado = resultado + string[i];
      }


    }
    
    solucion.innerHTML= resultado
  },

  decode: (offset, string) => {

    const offsetNegativo = offset * -1;
    cipher.encode(offsetNegativo, string);
  },

  createCipherWithOffset: (offset, string) => {
    return {
      encode: () => {
        return cipher.encode(offset, string)
      },

      decode: () => {
        return cipher.decode(offset, string)

      }
    }
  },

};


