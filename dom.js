console.log("Hello JavaScript");

// 01. Difference between var, let, and const

var name = 'Rahim'
name = 'Jasim' // Reassign করা যায়
var name = 'Kuddus' // Redeclare করা যায়
console.log(name);

const roll = 20
// roll = 35 // Reassign করা যায় না
// const roll = 20 // Redeclare করা যায় না
console.log(roll);

let address = 'Uttara, Dhaka'
address = 'Banani, Dhaka' // Reassign সম্ভব
// let address = 'Gulshan, Dhaka' // Redeclare করা যাবে না
console.log(address);

let location = ['Dhaka', 'Banani']
location.push = 'Gulshan' // Redeclare করা না গেলেও, ভ্যালু পুশ করা সম্ভব।
console.log(location);


// 02. Function default parameter for not provided values

function numbers(num1, num2) {
    let total = num1 + num2
    console.log(num1, num2, 'Total:', total);
}

numbers(10, 20); // এখানে arguments দুটি দেওয়ায় আউটপুটে এসেছে সঠিক। কিন্তু যদি একটি দেওয়া হয় তখন একটা undefind এবং total এ NaN দেখাবে। একটি নাম্বার দিয়েও undefind এবং total বা NaN বন্ধ করার উপায় হচ্ছে function এর শুরুতে () ডিফল্ট সেট করে দেওয়া। যেমন-

function allNumber(number1, number2, number3 = 0) {
    let total1 = number1 + number2 + number3
    console.log(number1, number2, number3, 'Total:', total1);
}

allNumber(10, 30); // এখানে arguments তিনটির জায়গায় দুটি দেওয়াতেও undefind এবং total এ NaN দেখাবে না। কারণ আমি শুরুতে ফানশনে কল করে ডিফল্ট হিসেবে = 0 সেট করে দিয়েছি। অর্থাৎ arguments এ কোন নাম্বার শর্ট থাকলে সেখানে সিস্টেম থেকে অটো 0 বসে কাউন্ট করে দিবে। 

// *** নিচে ডিফল্ট কিছু মান দেওয়া হলো-***

//* number --> = 0 [for add]
//* number --> = 1 [for multiply]
//* string --> = ''
//* array --> = []
//* object --> = {}

// 03. Template string, multiline string, dynamic string

const firstName = 'Kuddus'

const yourName = `My name is ${firstName}`; // ব্যট্রিক সাইন `` দিয়ে ফাংশন বা কোড আরও ডাইনামিক করা হয়। এই সাইন দিয়ে অনেক কোড লেখা যায়। অর্থাৎ এই একটা সাইনের ভিতর অনেকগুলো কোড ইনপুট করা যায়।
console.log(yourName);

function mobilePhone(name, description, price) {
    let div = `
    <div>
       <h2>${name.toUpperCase()} Rich Kids Phone</h2>
       <p>${description}</p>
       <p>${price}</p>
    </div>`;

    console.log(div);
}

mobilePhone('samsung', 'This is new model', '999 USD')