/*
TO DO

고차 함수를 이용한 풀이
예외 처리
객체 생성
*/

function solution(base, number, totalPlayer) {
  let valueBase;
  const numArr = [];
  const range = number * totalPlayer;

  for (let value = 0; value < range; value++) {
    valueBase = value.toString(base).split("");
    numArr.push(...valueBase);
  }
  return numArr;
}

function getNumberToSay(base, number, totalPlayer, orderNum) {
  let index = orderNum - 1;
  const orderNumArr = [];
  const numArr = solution(base, number, totalPlayer);

  if (orderNum > totalPlayer) {
    return "error";
  }

  while (index < numArr.length) {
    orderNumArr.push(numArr[index]);
    index += totalPlayer;
  }
  return orderNumArr;
}

function testCase() {
  console.log(solution(2, 4, 2));
  console.log(getNumberToSay(2, 4, 2, 1));
  console.log(getNumberToSay(2, 4, 2, 3));
}

testCase();
