const { describe } = require('yargs')
const {reverseStr, findLargestNum, isPalindrome} = require('./problems')


describe('reverseStr', () => {
    test('should reverse a string', () => {
        const input = 'word'
        const result = reverseStr(input)
        expect(result).toBe('drow')
    })
})

describe('findLargestNum', () => {
    test('should find largest number in list', () => {
        const input = [30, 2, 4, 5]
        const result = findLargestNum(input)
        expect(result).toBe(30)
    })
})

describe('isPalindrome', () => {
    test('checks if string is palindrome', () => {
        const input = 'racecar'
        const result = isPalindrome(input)
        expect(result).toBe(true)
    })
})
