// Find out minimum numbers

const height = [12, 20,78,52, 2, 5, 7, 105];

function minimum (numbers){
    let min = numbers[0];
    for(const num of numbers){
        if(num < min){
            min = num;
        }
    }
    return min 
}

const min = minimum(height);
console.log(min);

// Find out maximum numbers

const sNumber = [10, 25, 70, 20, 21, 52, 65, 40,05, 03, 20,80,98,50, 40];

function maximum(numbers){
    let max = numbers[0];
    for(const number of numbers){
        if(number > max){
            max = number;
        }
    }
    return max
}

const max = maximum(sNumber);
console.log(max);