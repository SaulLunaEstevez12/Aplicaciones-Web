function obtenerCadenas() {
    var cadenas = [];
  
    while (true) {
      var cadena = prompt("Ingrese una cadena de texto (o presione cancelar para finalizar):");
  
      if (cadena === null) {
        break;
      }
  
      cadenas.push(cadena);
    }
  
    var resultado = document.getElementById("resultado");
    resultado.textContent = cadenas.join("-");
  }
  