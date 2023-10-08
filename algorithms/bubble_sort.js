const arr = [0,1,2,5,2,7,-5,3,33,342,34,55,12,111,8,11,-7,-3,0,65];
let count = 0;

function bubbleSort (array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j+1] < array[j]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
            count += 1;
        }
    }
    return array;
}


console.log(bubbleSort(arr)); // O(n*n)
console.log(count);