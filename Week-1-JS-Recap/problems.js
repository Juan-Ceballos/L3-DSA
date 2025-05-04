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

// problem 2
function findLargestNum(nums) {
    let resultNum = nums[0]

    for (let num of nums) {
        if (num > resultNum) {
            resultNum = num
        }
    }

    return resultNum
}

console.log(findLargestNum([-3, 10, 3, 4]))

// Problem 3
function isPalindrome(str) {
    var tempStr = str
    for (let char of str) {
        currChar = tempStr.slice(-1)
        tempStr = tempStr.slice(0, -1)
        if (char !== currChar) {
            return false
        }
    }
    return true
}

console.log(isPalindrome("car"))
console.log(isPalindrome("tots"))
console.log(isPalindrome("racecar"))

exports.reverseStr = reverseStr
exports.findLargestNum = findLargestNum
exports.isPalindrome = isPalindrome