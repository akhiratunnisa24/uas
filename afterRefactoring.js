const shapes = {
  rectangle: (a, b) => a * b,
  triangle: (a, b) => 0.5 * a * b,
  circle: (r) => Math.PI * r * r
};

function calculateArea(shape, ...args) {
  return shapes[shape] ? shapes[shape](...args) : "Unknown shape";
}

console.log(calculateArea("rectangle", 10, 5)); // 50
console.log(calculateArea("triangle", 10, 5));  // 25
console.log(calculateArea("circle", 10));       // 314.16
