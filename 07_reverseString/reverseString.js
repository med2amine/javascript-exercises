const reverseString = function(string) {
    sol = ""
    for (let i = string.length - 1;i>=0;i--){
        sol += string[i]
    }
    return sol
};

// Do not edit below this line
module.exports = reverseString;
