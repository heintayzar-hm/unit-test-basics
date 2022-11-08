export default class Calculator { 
    constructor(...args) {
        this.args = args
    }

    numsTester = (nums) => {
        if(nums.length === 0 ) {
            throw new Error('Please add some numbers')
        }
    }
    add = (...nums) => {
        nums = [...this.args,...nums];
       this.numsTester(nums);
       return nums.reduce((p,c) => p+c)
    }

    subtract = (...nums) => {
        nums = [...this.args,...nums];
        this.numsTester(nums);
        return nums.reduce((p,c) => p-c);
    }

    divide = (...nums) => {
        nums = [...this.args,...nums];
        this.numsTester(nums);
        return nums.reduce((p,c) => p/c);
    }

    multiply = (...nums) => {
        nums = [...this.args,...nums];
        this.numsTester(nums);

        return nums.reduce((p,c) => p*c);
    }
 }
 const calculator = new Calculator()
 console.log(calculator.add(1,2));
 console.log(calculator.subtract(1,2));
 console.log(calculator.divide(1,2));
 console.log(calculator.multiply(1,2));