const array = [1,2,5,3,2,8,5,90,34,56,7,54,78,12];

function lineralSearch(array, item) {
    for (let i = 0; i < array.length; i++){
        if (array[i] === item){
            return i;
        }
    }
    return null;
}

console.log(lineralSearch(array, 7))