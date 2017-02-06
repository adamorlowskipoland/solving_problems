//var sum = 0;
//var n = 0;
//
//
//function findN ( a, b ) {
//    n = a + b;
//    console.log(n);
//    n = n + b;
//    
//}
//
//findN(1, 2);
//
//
////for (i = 1; i < 100; i++) {
////    if ( i % 2 == 0) {
////        sum += i;
////        console.log(sum);
////    }
////}
////console.log(sum);
//
//var i;
//var fib = []; // Initialize array!
//
//fib[0] = 0;
//fib[1] = 1;
//for(i=2; i<=10; i++) {
//    
//    // Next fibonacci number = previous + one before previous
//    // Translated to JavaScript:
//    fib[i] = fib[i-2] + fib[i-1];
//    console.log(fib[i]);
//}
fib = function(numMax){
    for(var fibArray = [0,1], i=0,j=1,k=0; k<=numMax;i=j,j=x,k++ ){
        x=i+j;
        if ( x%2 == 0) {
            fibArray.push(x);
        }
    }
    console.log(fibArray);
    var sum = fibArray.reduce((a, b) => a + b, 0);
    console.log(sum);
}

fib(40)



//var sum = 0;    // 3
//var a = 0;      // 2
//var b = 1;      // 2
//
//
//for (k=0; k<=10; a=b, b=x, k++) {
//    x = a + b;
//    console.log(x);
//}