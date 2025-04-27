// Reverse a string
// Find the max number in an array
// Determine if a word is a palindrome

// Problem 1
function reverseStr(str) {
    let resultStr = ""
    for (let char of str) {
        resultStr = char + resultStr
    }

    return resultStr
}

console.log(reverseStr("word"))

module.exports = reverseStr