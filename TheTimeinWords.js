function timeInWords(h, m) {
    // Write your code here
    let numString = {
        1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five',
        6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten',
        11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'forteen', 15: 'quarter',
        16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'ninteen', 20: 'twenty',
        21: 'twenty one', 22: 'twenty two', 23: 'twenty three', 24: 'twenty four', 25: 'twenty five',
        26: 'twenty six', 27: 'twenty seven', 28: 'twenty eighth', 29: 'twenty nine', 30: 'half'
    }
    let output
    if (m === 0) {
        return numString[h] + ` o' clock`
    } else if (m <= 30) {
        if (m === 1) {
            return numString[m] + ' minute' + ' past ' + numString[h]
        } else if (m !== 15 && m !== 30) {
            return numString[m] + ' minutes' + ' past ' + numString[h]
        } else {
            return numString[m] + ' past ' + numString[h]
        }
    } else {
        if (60 - m === 1) {
            return numString[60 - m] + ' minute' + ' to ' + numString[h + 1]
        } else if (60 - m !== 15 && 60 - m !== 30) {
            return numString[60 - m] + ' minutes' + ' to ' + numString[h + 1]
        } else {
            return numString[60 - m] + ' to ' + numString[h + 1]
        }
    }
}
console.log(timeInWords(3, 30));
