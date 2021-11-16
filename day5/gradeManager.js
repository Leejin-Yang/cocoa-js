const scores = [
  89.23, 82.03, 71.56, 78.82, 85.05, 84.44, 67.53, 71.7, 77.97, 73.77, 84.25,
  67.01, 73.78, 64.19, 89.89, 90.32, 73.21, 75.35, 83.22, 74.01,
];

const ZTABLE = require("./src/zTable");

function getMean(array) {
  const totalScore = array.reduce((acc, curr) => acc + curr);
  const mean = (totalScore / array.length).toFixed(2);
  return mean;
}

function getVariance(array) {
  const mean = getMean(array);
  const sumOfSquares = array
    .map((score) => Math.pow(score - mean, 2))
    .reduce((acc, curr) => acc + curr, 0);
  const variance = (sumOfSquares / array.length).toFixed(2);
  return variance;
}

function getStandardDeviation(array) {
  const variance = getVariance(array);
  const standardDeviation = Math.sqrt(variance).toFixed(2);
  return standardDeviation;
}

function getZScore(array, score) {
  const mean = getMean(array);
  const standardDeviation = getStandardDeviation(array);
  const zScore = ((score - mean) / standardDeviation).toFixed(2);
  return zScore;
}

function getScoreArea(array, score) {
  const zScore = getZScore(array, score);
  const absoluteMultiple = Math.abs(zScore) * 100;
  const row = parseInt(absoluteMultiple / 10);
  const col = parseInt(absoluteMultiple % 10);
  let scoreArea = ZTABLE[row][col];

  if (zScore < 0) {
    scoreArea = (1 - scoreArea).toFixed(4);
  }
  return scoreArea;
}

function getPercentage(array, score1, score2) {
  const scoreArea1 = getScoreArea(array, score1);
  const scoreArea2 = getScoreArea(array, score2);
  const betweenArea = Math.abs(scoreArea2 - scoreArea1);
  const percentage = (betweenArea * 100).toFixed(2);
  return `${percentage}%`;
}

function test() {
  console.log(getMean(scores));
  console.log(getVariance(scores));
  console.log(getStandardDeviation(scores));
  console.log(getZScore(scores, 70));
  console.log(getZScore(scores, 80));
  console.log(getScoreArea(scores, 70));
  console.log(getScoreArea(scores, 80));
  console.log(getPercentage(scores, 70, 80));
}

test();
