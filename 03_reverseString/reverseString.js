const reverseString = function(str) {
    var splitString = str.split("");

    var stringReverse = splitString.reverse();

    var reversedString = stringReverse.join("")

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
