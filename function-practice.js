//*** Find out Even number

// let num1 = 12;
// let num2 = 20;
// let num3 = 151;

function isthisEvennumber(num1, num2, num3){
    let sum= num1+num2+num3
    // console.log(sum);
    if(sum%2===0){
        console.log("Yes, this is even number");
    }
    else{
        console.log("No, this is odd number");
    }
}

isthisEvennumber(10, 50, 120);
// isthisEvennumber(num1, num2, num3)


//*** Find out Odd number

// let number1 = 12;
// let number2 = 55;
// let number3 = 71;

function isthisOddnumber(number1, number2, number3){
    let total = number1*number2+number3
    // console.log(total);
    if(total%2===1){
        console.log("Yes, this is odd number");
    }
    else{
        console.log("No, this is even number");
    }
}

isthisOddnumber(126, 151, 181);
// isthisOddnumber(number1, number2, number3);