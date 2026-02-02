function kmTometer(km){
    const meter = km * 1000;
    return meter;
}

const exactMeter = kmTometer(12);
console.log(exactMeter);