function getTriangleArea(a, h) {
  if (a <= 0 || h <= 0) {
    console.log('Nieprawidłowe dane');
  } else {
    return (a*h/2);
  }
}

console.log(getTriangleArea(10,6));

var triangleArea1 = getTriangleArea(5,12),
	triangleArea2 = getTriangleArea(8,3),
	triangleArea3 = getTriangleArea(2,9);

console.log('Pole trójkąta nr 1 = ' + triangleArea1);
console.log('Pole trójkąta nr 2 = ' + triangleArea2);
console.log('Pole trójkąta nr 3 = ' + triangleArea3);