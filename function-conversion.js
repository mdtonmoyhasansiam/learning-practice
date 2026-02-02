//Convert KM to Meter

function kmTometer(km){
    const meter = km * 1000;
    return meter;
}

const exactMeter = kmTometer(12);
console.log(exactMeter);

// Convert CM to Meter

function cmTometer(cm){
    const meter = cm * 0.01;
    return meter;
}

const exact_meter = cmTometer (10);
console.log(exact_meter);

// Convert inch to feet

function inchTofeet(inch){
    const feet = inch * 0.0833333;
    // return feet; [Way 1]
    console.log(feet); // [Way 2]
}

// const exactFeet = inchTofeet(110); [Way 1]
// console.log(exactFeet); [Way 1]

inchTofeet(110); // [Way 2]