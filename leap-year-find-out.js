//** 1. Those year that is not divisible by 100 and if the year is divisible by 4, then it will be a leap year
//** 2. If the year is divisible by 400, then it is a leap year
//** 3. Else it is not a leap year

function isLeapyear(year){
    if(year % 100 !== 0 && year % 4 === 0){
        return true;
    }
    else if(year % 400 === 0){
        return true;
    }
    else {
        return false;
    }
}

const isYear = isLeapyear(2030);
const isYear1 = isLeapyear(2040);
const isYear2 = isLeapyear(2050);

console.log(isYear, isYear1, isYear2);

