/*
    1. factorial 함수
    
    * 1 - number까지의 배열을 만든다.
    * 각 요소에 factorial 함수를 적용
    * 배열 반환
    * 
    * push, map
*/

function getNumArr(number) {
  const numArr = [];

  for (let i = 1; i < number + 1; i++) {
    numArr.push(i);
  }
  return numArr;
}

function factorial(number) {
  if (number === 1) {
    return 1;
  }
  return number * factorial(number - 1);
}

function calculate(number) {
  const numArr = getNumArr(number);
  const factorialArr = numArr.map((num) => factorial(num));
  return factorialArr;
}

function testCase() {
  console.log(calculate(5));
}

testCase();
