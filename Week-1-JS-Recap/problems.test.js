const problems = require('./problems')
const reverseStr = require('./problems')

describe('reverseStr', () => {
    test('should reverse a string', () => {
        const input = 'word'
        const result = reverseStr(input)
        expect(result).toBe('drow')
    })
})