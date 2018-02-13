/////////////////////////-------------- LET and CONST -----------------------/////////////////

/*
//ES5
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);


// ES6
const name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);
*/

/*
// ES5
function driversLicence(passedTest) {

    if (passedTest) {
        console.log(firstName);
        var firstName = 'John';
        var yearOfBirth = 1990;
    }

    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicence(true);



// ES6
function driversLicence(passedTest) {

    // console.log(firstName);
    let firstName;
    const yearOfBirth = 1990;


    if (passedTest) {
        let firstName = 'John';
    }

    console.log(firstName + ', born in ' + yearOfBirth + ', is now officially allowed to drive a car.');
}

driversLicence(true);


let i = 23;

for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);
*/


/////////////////////////-------------- Block and IIFEs -----------------------/////////////////
/*
// ES6
{
    const a = 1;
    let b = 2;
    var c = 3;
}

// console.log(a + b);
console.log(c);


// ES5
(function() {
    var c = 1;
})();

// console.log(c);
*/







/////////////////////////-------------- STRING -----------------------/////////////////

let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
    return 2016 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

// Es6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);