var readlineSync = require('readline-sync');

var quantNum = readlineSync.questionInt("Digite a quantidade de números que pretende somar: ");

var soma = 0;

for(i = 0; i < quantNum; i++){
    var num = readlineSync.questionInt("Digite o número: ");
    var soma = num + soma;
}

console.log("A soma dos números equivale à: " + soma);

