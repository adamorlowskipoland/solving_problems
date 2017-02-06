function evenFibNumbers(){
    var value = 4000000;
    var sum = 0;
    var temp = 0;
    var num2 = 1;
    var num1 = 1;

    while( num2 < value ) {
        temp = num1 + num2;
        num1 = num2;
        num2 = temp;
        if ( num2 % 2 == 0 ) {
            sum += num2;
        }
    }
    alert("result ="+sum);
}
evenFibNumbers();


/*
// solution finded on internet:
var sumEvenFibonacci = function() {

	var result = 0
	var max = 4000000

	for (var i = 1, j = 2, t = 0; i <= max ; t=i, i=j, j+=t) {
    
		if (i%2 == 0) {
			result += i
		}
	}
    alert(result);
}
sumEvenFibonacci();
*/