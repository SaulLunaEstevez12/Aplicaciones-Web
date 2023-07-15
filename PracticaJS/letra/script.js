function calcularLetraDNI() {
    var dniInput = document.getElementById("dni");
    var resultado = document.getElementById("resultado");
  
    var dni = parseInt(dniInput.value);
  
    if (!isNaN(dni) && dni >= 0 && dni <= 99999999) {
      var letras = "TRWAGMYFPDXBNJZSQVHLCKE";
      var indice = dni % 23;
      var letra = letras.charAt(indice);
      resultado.textContent = "La letra del DNI " + dni + " es: " + letra;
    } else {
      resultado.textContent = "El valor ingresado no es un número válido. Por favor, intente nuevamente.";
    }
  }
  