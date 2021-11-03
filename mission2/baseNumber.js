function solution(base, number, playerNum) {
  let valueBase;
  const numArr = [];

  for (let value = 0; value < number * playerNum; value++) {
    valueBase = value.toString(base).split("");
    numArr.push(...valueBase);
  }
  return numArr;
}

console.log(solution(2, 4, 2));
