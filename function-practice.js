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