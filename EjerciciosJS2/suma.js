function ejercicio3() {
    var numero = prompt("Ingrese un numero:");
    var suma = 0;

    for (var i = 0; i < numero.length; i++) {
        suma += parseInt(numero.charAt(i));
    }

    alert("La suma de los digitos del número es: " + suma);
}
