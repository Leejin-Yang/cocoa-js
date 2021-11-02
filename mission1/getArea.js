function getArea(figure, ...number) {
  let area;

  if (figure === "circle") {
    area = number[0] * number[0] * Math.PI;

    for (let i = 1; i < number[1]; i++) {
      area += (number[0] + i) * (number[0] + i) * Math.PI;
    }
  }
  if (figure === "rect") {
    area = number[0] * number[1];
  }
  if (figure === "trapezoid") {
    area = (number[0] + number[1]) * number[2] * 0.5;
  }
  return area;
}

console.log(getArea("circle", 10));
console.log(getArea("circle", 10, 2));
console.log(getArea("rect", 10, 15));
console.log(getArea("trapezoid", 10, 15, 12));
