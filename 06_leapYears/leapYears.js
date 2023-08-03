const leapYears = function(years) {
    if (years % 4 === 0 && (years % 100 !== 0 || years % 400 === 0)){ //&& years % 400 === 0) {
        return true
    }
    else {
        return false;
    }
};
const test = leapYears(34992)
console.log(test);
// Do not edit below this line
module.exports = leapYears;
