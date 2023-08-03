const removeFromArray = function(arr, num) {

    

const arrayWithoutNum = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arguments[i]) {
            arrayWithoutNum.push(arr[i]);
        }

    };
    return arrayWithoutNum
}



// Do not edit below this line
module.exports = removeFromArray;
