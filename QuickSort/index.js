var readlineSync = require('readline-sync');

var quantNum = readlineSync.questionInt("Digite a quantidade de números que deseja inserir no vetor para ordenar: ");

var array = [];

for(i = 0; i < quantNum; i++){
    var num = readlineSync.questionInt("Digite o número: ");
    array.push(num);
}

console.log("O vetor desornado tem os seguintes elementos: " + array + ".")

function swap(array, left, right){
    var aux = array[left];
    array[left] = array[right];
    array[right] = aux;
}    

function partition (array, left, right){
    var pivot = array[Math.floor((left + right)/2)]
    
    while(left <= right){
        while(array[left] < pivot){
            left++
        }    
    
        while(array[right] > pivot){
            right--
        }

        if(left <= right){
            swap(array, left, right);
            left++
            right--
        }
    }

    return left;

}

function QuickSort(array, left, right){
    
    var index;

    if(array.length > 1){
        
        index = partition(array, left, right);
        
        if(left < index - 1){
            QuickSort(array, left, index - 1);
        }

        if(index < right){
            QuickSort(array, index, right);
        }
    }
    
    return array
}

var result = QuickSort(array, 0, array.length - 1);

console.log("O vetor ordenado com o QuickSort ficou com a seguinte ordem: " + result + " .")

