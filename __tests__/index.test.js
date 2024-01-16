const {calculateMedi, checkIncrease} = require('../index')

describe('Calculation of Medi Score', ()=>{
    test('Patient 1', ()=>{
        const result = 0
        expect(calculateMedi(0,0,15,95,37.1)).toBe(result)
    })
    test('Patient 2', ()=>{
        const result = 4
        expect(calculateMedi(2,0,17,95,37.1)).toBe(result)
    })
    test('Patient 3', ()=>{
        const result = 8
        expect(calculateMedi(2,1,23,88,38.5)).toBe(result)
    })
    test('Checking for increased score within 24 hrs', ()=>{
        const checkOne = calculateMedi(2,0,17,95,37.1)
        const checkTwo = calculateMedi(2,1,23,88,38.5)
        expect(checkIncrease(checkOne, checkTwo)).toBe('Score increased by more than 2 or more')
    })
    test('Checks that score hasnt increased dramatically', ()=>{
        const checkOne = calculateMedi(0,0,15,95,37.1)
        const checkTwo = calculateMedi(0,0,15,95,38.1)
        expect(checkIncrease(checkOne, checkTwo)).toBe('Score not increased notably')
    })
    test('Checks the CBG aswell', ()=> {
        //Fasting is equal to 0 and eaten in last two hours is 1 for binary representation
        const result = 11
        expect(calculateMedi(2,1,23,88,38.5, 1, 4.5)).toBe(result)
    })
    test('Checks the CBG aswell addittional', ()=> {
        const result = 0
        expect(calculateMedi(0,0,15,95,37.1, 0, 4.5)).toBe(result)
    })
})