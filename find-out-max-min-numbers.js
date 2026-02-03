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