var readlineSync = require('readline-sync');

var num1 = readlineSync.questionInt("Digite o primeiro número: ");
var num2 = readlineSync.questionInt("Digite o segundo número: ");

    while(num2 != 0){
        var resto = num1 % num2;
        num1 = num2;
        num2 = resto;
    }

console.log("O MDC entre os dois número equivale à: " + num1);
