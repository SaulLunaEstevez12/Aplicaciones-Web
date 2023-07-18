function ejercicio4() {
    var limiteInferior = prompt("Ingrese el limite inferior:");
    var limiteSuperior = prompt("Ingrese el limite superior:");

    var numeroAleatorio = Math.floor(Math.random() * (limiteSuperior - limiteInferior + 1)) + parseInt(limiteInferior);

    alert("El numero aleatorio generado es: " + numeroAleatorio);
}
