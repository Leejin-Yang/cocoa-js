const arr = [];

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

function saveExecutionSequence(figure) {
  arr.push(figure);
}

function getArea(figure, ...params) {
  saveExecutionSequence(figure);

  if (figure === "circle") {
    return getCircle(params[0], params[1]);
  }
  if (figure === "rect") {
    return getRectangle(params[0], params[1]);
  }
  if (figure === "trapezoid") {
    return getTrapezoid(params[0], params[1], params[2]);
  }
}

function printExecutionSequence() {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

console.log(getArea("circle", 10));
console.log(getArea("circle", 10, 2));
console.log(getArea("rect", 10, 15));
console.log(getArea("trapezoid", 10, 15, 12));
printExecutionSequence();
