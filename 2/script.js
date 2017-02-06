var sum = 0;

for (i = 1; i < 1000; i++) {
	if (i % 3 == 0 && i % 5 == 0) {
      sum += i;
		console.log(i + " multiples of 3 and 5")
	} else if (i % 5 == 0) {
      sum += i;
		console.log(i + " multiples of 5");
	} else if (i % 3 == 0 ) {
      sum += i;
		console.log(i + " multiples of 3");
	} else {
		console.log(i);
	}
}
console.log("The sum of all multiples of 3 and 5 below 1000 is " + sum);