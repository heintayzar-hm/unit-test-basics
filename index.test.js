import { stringLength,reverseString,capitalize } from './index.js' ;
import Calculator from './modules/calculator.js';
describe('string length getter', () => {
    test('should output string Length', () => {
        const textLength = stringLength('Hein Tay');
        expect(textLength).toBe(8);
    });
    test('should output string Length greater than 1 and less than 10', () => {
        const largerThanTenString = () => {
            stringLength('Hein Tay Zar')
        }
        const smallerThanOneString = () => {
            stringLength('')
        }
        expect(largerThanTenString).toThrow('The string should not be longer than 10 and smaller that 1');
        expect(smallerThanOneString).toThrow('The string should not be longer than 10 and smaller that 1');
    });
})


describe('string revese', () => {
    test('should output reversed string', () => {
        const text = reverseString('Hein Tay Zar');
        expect(text).toBe('raZ yaT nieH');
    });
})

describe('When there is no input', () => {
    const calculator = new Calculator();
    test('should show add errors if none enter', () => {
        expect(() => {
            calculator.add();
        }).toThrow('Please add some numbers');
    });
    test('should show add errors if none enter', () => {
        const res = () => {
            calculator.subtract();
        }
        expect(res).toThrow('Please add some numbers');
    });
    test('should show add errors if none enter', () => {
        const res = () => {
            calculator.divide();
        }
        expect(res).toThrow('Please add some numbers');
    });
    test('should show add errors if none enter', () => {
        const res = () => {
            calculator.multiply();
        }
        expect(res).toThrow('Please add some numbers');
    });
})

describe('when you do normal operation', () => {
    const calculator = new Calculator();
    test('should show add results', () => {
        expect(
            calculator.add(1,2,3,4)
        ).toBe(10);
    });

    test('should show subtract results', () => {
        expect(
            calculator.subtract(1,2,3,4)
        ).toBe(-8);
    });

    test('should show division result', () => {
        expect(
            calculator.divide(1,2,3,4)
        ).toBeCloseTo(0.041666,4);
    });

    test('should show add errors if none enter', () => {
        expect(
            calculator.multiply(1,2,3,4)
        ).toBe(24);
    });
})

describe('when you do normal operation', () => {
    const calculator = new Calculator();
    test('should show add results', () => {
        expect(
            calculator.add(-1,-2,-3,-4)
        ).toBe(-10);
    });

    test('should show subtract results', () => {
        expect(
            calculator.subtract(-1,-2,-3,-4)
        ).toBe(8);
    });

    test('should show division result', () => {
        expect(
            calculator.divide(-1,-2,-3,-4)
        ).toBeCloseTo(0.041666,4);
    });

    test('should show add errors if none enter', () => {
        expect(
            calculator.multiply(-1,-2,-3)
        ).toBe(-6);
    });
});

test('capitalize the first character', () => {
    expect(
       capitalize('heinHosad')
    ).toBe('HeinHosad');
})

test('when number', () => {
    expect(
       capitalize('8einHosad')
    ).toBe('8einHosad');
})