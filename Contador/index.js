var readlineSync = require('readline-sync');

var num = readlineSync.questionInt("Digite um número: ");

console.log("Existem " + num + " números inteiros entre 1 e " + num + ".");
