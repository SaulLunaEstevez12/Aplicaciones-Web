function ejercicio2() {
    var palabra = prompt("Ingrese una palabra o frase:");
    var palabraInvertida = palabra.split("").reverse().join("");

    if (palabra === palabraInvertida) {
        alert("La palabra/frase es un palindromo.");
    } else {
        alert("La palabra/frase no es un palindromo.");
    }
}
