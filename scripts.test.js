import { capitalize, reverseString, Calculator, ceaserCipher, analyzeArray } from './scripts.js';

describe('Calculator', () => {
    let calculator;
    beforeEach(() => {
        calculator = new Calculator(1, 2);
    })

    it('works', () => {
        expect(calculator.add()).toBe(3)
    })

    it('works', () => {
        expect(calculator.subtract()).toBe(-1)
    })
    
    it('works', () => {
        expect(calculator.multiply()).toBe(2)
    })

    it('works', () => {
        expect(calculator.divide()).toBeLessThan(2)
    })
})

it('works', () => {
    expect(ceaserCipher('panchod', 1)).toBe('qbodipe')
})

it('works', () => {
    expect(ceaserCipher('panchod', 26)).toBe('panchod')
})

it('works', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toMatchObject({
        avg: 4,
        length: 6,
        min: 1,
        max: 8,
        
    })
})

it('works', () => {
    expect(capitalize('fuck')
    ).toBe('Fuck')
});

it('works', () => {
    expect(reverseString('fuck')).toBe('kcuf')
})

