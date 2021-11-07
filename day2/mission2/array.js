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

/*
    2. 배열 거르기
    
    * 특수기호가 있는 아이디 제외
    * 아이디에서 숫자 제거
    * 반복문을 사용한 버전, 고차함수를 사용한 버전
    * 
    * 문자 분할
    * 특수문자가 있다면 제거
*/

const peoples = ["crong!@#", "honux5", "sarah#", "hea3d", "zello", "5lucas"];

function filterId(peoples) {
  const result = peoples.filter((name) => name != "zello");
  return result;
}

/*
    3. 평균 구하기
    
    * 특수기호가 있는 아이디 제외
    * 아이디에서 숫자 제거
    * 반복문을 사용한 버전, 고차함수를 사용한 버전
*/

const grades = [
  [88, 76, 77],
  [33, 44, 44],
  [90, 100, 94],
  [30, 44, 98],
];

function getStudentAverage(grades) {}

/*
    4. 배열 만들기
    
    * 특수기호가 있는 아이디 제외
    * 아이디에서 숫자 제거
    * 반복문을 사용한 버전, 고차함수를 사용한 버전
*/

const data = require("./o");

/*
    5. 배열 결과 출력
    
    * 특수기호가 있는 아이디 제외
    * 아이디에서 숫자 제거
    * 반복문을 사용한 버전, 고차함수를 사용한 버전
*/

function testCase() {
  console.log(calculate(5));
  console.log(filterId(peoples));
  // console.log(data);
}

testCase();
