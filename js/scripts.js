var a = 2,
	b = 5;

value = (a*a) + (2*a*b) - (b*b);
console.log(value);

// sprawdzenie: liczba jest dodatnia lub ujemna lub jest zerem
if (value < 0) {
	console.log("wynik ujemny");
} else if (value > 0) {
	console.log("wynik dodatni");
} else {
	console.log("wynik równa się zero")
}