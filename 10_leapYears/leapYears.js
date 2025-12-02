const leapYears = function(year) {
    const byfour = year % 4 === 0
    const byhundred = year % 100 === 0
    const byfourhundred = year % 400

    if (byfour && byhundred || byfourhundred){
        return true
    }
    else{
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;
