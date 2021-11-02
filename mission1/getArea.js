const logArr = [];
const areaArr = [];

function getCircle(radius, number) {
  let area;

  area = Math.pow(radius, 2) * Math.PI;
  for (let i = 1; i < number; i++) {
    area += Math.pow(radius + i, 2) * Math.PI;
  }
  return area;
}

function getRectangle(width, height) {
  let area;

  area = width * height;
  return area;
}

function getTrapezoid(shortBase, longBase, height) {
  let area;

  area = (shortBase + longBase) * height * 0.5;
  return area;
}

function saveExecutionSequence(key, value) {
  logArr.push(key);
  areaArr.push(value);
}

function getArea(figure, ...params) {
  let area;

  if (figure === "circle") {
    area = getCircle(...params);
  }
  if (figure === "rect") {
    area = getRectangle(...params);
  }
  if (figure === "trapezoid") {
    area = getTrapezoid(...params);
  }
  saveExecutionSequence(figure, area);
  return area;
}

function printExecutionSequence() {
  for (let i = 0; i < logArr.length; i++) {
    console.log(`${logArr[i]}: ${areaArr[i]}`);
  }
}

console.log(getArea("circle", 10));
console.log(getArea("circle", 10, 2));
console.log(getArea("rect", 10, 15));
console.log(getArea("trapezoid", 10, 15, 12));
printExecutionSequence();
