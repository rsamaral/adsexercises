var readlineSync = require('readline-sync');

var quantFibonacci = readlineSync.questionInt("Quantos números da sequência de Fibonacci você quer exibir?");

var seqFib = [0,1];


for(i = 2; i < quantFibonacci; i++) {
    seqFib.push(seqFib[i - 2] + seqFib[i - 1]); 
}
console.log(seqFib) 

