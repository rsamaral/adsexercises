var readlineSync = require('readline-sync');

var num = readlineSync.questionInt("Digite o número: ");
var div = 0;

for (i = 1; i <= num; i++){
    if(num % i == 0){
        div++;
    }
}

if(div == 2){
    console.log(num + " é um número primo!");
} else {
    console.log(num + " não é um número primo!");
} 