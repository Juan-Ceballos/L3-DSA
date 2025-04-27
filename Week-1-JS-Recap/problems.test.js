const {reverseStr, findLargestNum} = require('./problems')


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
