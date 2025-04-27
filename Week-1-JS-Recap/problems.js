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



exports.reverseStr = reverseStr
exports.findLargestNum = findLargestNum