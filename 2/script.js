function EvenFibonacciNumbers(){
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

            //document.getElementById("output").value=sum;
            alert("result ="+sum);
        }
EvenFibonacciNumbers();