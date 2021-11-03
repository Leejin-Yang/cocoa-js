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

  while (index < numArr.length) {
    orderNumArr.push(numArr[index]);
    index += totalPlayer;
  }
  return orderNumArr;
}

function testCase() {
  console.log(solution(3, 4, 2));
  console.log(getNumberToSay(3, 4, 2, 1));
}

testCase();
