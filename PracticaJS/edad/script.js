function verificarEdad() {
    var edadInput = document.getElementById("edad");
    var resultado = document.getElementById("resultado");
  
    var edad = parseInt(edadInput.value);
  
    if (edad >= 18) {
      resultado.textContent = "Ya puedes conducir";
    } else {
      resultado.textContent = "No puedes conducir";
    }
  }
  