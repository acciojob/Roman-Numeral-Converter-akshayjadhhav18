function convertToRoman(num) {
    const romanSymbols = [
        ['M', 1000], 
        ['CM', 900],
        ['D', 500], 
        ['CD', 400],
        ['C', 100], 
        ['XC', 90],
        ['L', 50], 
        ['XL', 40],
        ['X', 10], 
        ['IX', 9],
        ['V', 5], 
        ['IV', 4],
        ['I', 1]
    ];

    let result = '';
    for (const [symbol, value] of romanSymbols) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }

    return result;
}

// Test cases
console.log(convertToRoman(14));   // XIV
console.log(convertToRoman(798));  // DCCXCVIII
console.log(convertToRoman(36));   // XXXVI
console.log(convertToRoman(944));  // CMXLIV

// Do not edit below this line
module.exports = convertToRoman;
