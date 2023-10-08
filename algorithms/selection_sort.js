const arr = [0,1,2,5,2,7,-5,3,33,342,34,55,12,111,8,11,-7,-3,0,65];
let count = 0;

function selectionSort (array) {
    for (let i = 0; i < array.length; i++) {
        let indexMin = i;
        for (let j = i+1; j < array.length; j++) {
            if (array[j] < array[indexMin]) {
                indexMin = j;
            }
            count += 1;
        }
        let temp = array[i];
        array[i] = array[indexMin];
        array[indexMin] = temp;
    }
    return array;
}

console.log(selectionSort(arr));// O(n*n)
console.log(count);