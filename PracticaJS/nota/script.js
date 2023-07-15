function obtenerCalificacion() {
    var notaInput = document.getElementById("nota");
    var resultado = document.getElementById("resultado");
  
    var nota = parseFloat(notaInput.value);
  
    if (nota >= 0 && nota < 3) {
      resultado.textContent = "Muy deficiente";
    } else if (nota >= 3 && nota < 5) {
      resultado.textContent = "Insuficiente";
    } else if (nota >= 5 && nota < 6) {
      resultado.textContent = "Suficiente";
    } else if (nota >= 6 && nota < 7) {
      resultado.textContent = "Bien";
    } else if (nota >= 7 && nota < 9) {
      resultado.textContent = "Notable";
    } else if (nota >= 9 && nota <= 10) {
      resultado.textContent = "Sobresaliente";
    } else {
      resultado.textContent = "Nota inválida";
    }
  }
  