const arr = [0,1,2,5,2,7,-5,3,33,342,34,55,12,111,8,11,-7,-3,0,65];
let count = 0;

function quickSort (array){
    if (array.length <= 1){
        return array;
    }
    let supportIndex = Math.floor(array.length / 2);
    let support = array[supportIndex];
    let less = [];
    let greater = [];
    for (let i = 0; i < array.length; i++) {
        count += 1;
        if (i === supportIndex){
            continue;
        }
        if (array[i] < array[supportIndex]){
            less.push(array[i]);
        }
        else {
            greater.push(array[i]);
        }
    }
    return [...quickSort(less), support, ...quickSort(greater)]
}

console.log(quickSort(arr)); // O(log2n*n)
console.log(count);