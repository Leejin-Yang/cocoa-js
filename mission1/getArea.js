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

function getArea(figure, ...number) {
  if (figure === "circle") {
    return getCircle(number[0], number[1]);
  }
  if (figure === "rect") {
    return getRectangle(number[0], number[1]);
  }
  if (figure === "trapezoid") {
    return getTrapezoid(number[0], number[1], number[2]);
  }
}

console.log(getArea("circle", 10));
console.log(getArea("circle", 10, 2));
console.log(getArea("rect", 10, 15));
console.log(getArea("trapezoid", 10, 15, 12));
