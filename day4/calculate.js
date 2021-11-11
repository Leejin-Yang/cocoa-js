class Calculate {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  add() {
    const result = this.num1 + this.num2;
    this.print(result);
  }

  substract() {
    const result = this.num1 - this.num2;
    this.print(result);
  }

  multiply() {
    const result = this.num1 * this.num2;
    this.print(result);
  }

  division() {
    const result = this.num1 / this.num2;
    this.print(result);
  }

  print(value) {
    console.log(value);
  }
}

function test() {
  const calculate = new Calculate(2, 3);

  calculate.add();
  calculate.substract();
  calculate.multiply();
  calculate.division();
}

test();
