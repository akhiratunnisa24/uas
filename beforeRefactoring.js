function calculateArea(shape, a, b) {
  if (shape === "rectangle") {
      return a * b;
  } else if (shape === "triangle") {
      return 0.5 * a * b;
  } else if (shape === "circle") {
      return Math.PI * a * a;
  } else {
      return "Unknown shape";
  }
}

console.log(calculateArea("rectangle", 10, 5)); // 50
console.log(calculateArea("triangle", 10, 5));  // 25
console.log(calculateArea("circle", 10));       // 314.16
