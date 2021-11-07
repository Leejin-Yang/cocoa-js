const logArr = [];

function getCircle(radius, number = 1) {
  let area = 0;
  const PI = Math.PI;

  for (let i = 0; i < number; i++) {
    area += (radius + i) * (radius + i) * PI;
  }
  return area.toFixed(2);
}

function getRectangle(width, height) {
  const area = width * height;
  return area;
}

function getTrapezoid(shortBase, longBase, height) {
  const area = (shortBase + longBase) * height * 0.5;
  return area;
}

function saveExecution(key, value) {
  logArr.push(`${key}: ${value}`);
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
  saveExecution(figure, area);
  return area;
}

function printExecutionSequence() {
  const sequence = logArr.join("\n");
  console.log("계산수행순서");
  console.log(sequence);
}

function test() {
  getArea("circle", 10);
  getArea("circle", 10, 2);
  getArea("rect", 10, 15);
  getArea("trapezoid", 10, 15, 12);
  printExecutionSequence();
}

test();
