////////////////--------- LET and CONST ---------//////////////////

/*
// ES5
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
function driversLicence5(passedTest) {

    if (passedTest) {
        console.log(firstName);
        var firstName = 'John';
        var yearOfBirth = 1990;
    }

    console.log(firstName + ', borned in ' + yearOfBirth + ', is officially allowed to drive a car');    
}
driversLicence5(true);


// ES6
function driversLicence6(passedTest) {

    console.log(firstName);    
    let firstName;
    const yearOfBirth = 1990;    
    
    if (passedTest) {
        firstName = 'John';
    }

    console.log(firstName + ', borned in ' + yearOfBirth + ', is officially allowed to drive a car');
    
}
driversLicence6(true);
*/



// It's blockspoe, even thought they are having similar name "i"
// But they are different
/*
let i = 23;

for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);
*/

/*
var i = 23;

for (var i = 0; i < 5; i++) {
    console.log(i);
}

console.log(i);
*/




////////////////--------- BLOCKS and IIFEs ---------//////////////////

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
    var c = 3;
})();

// console.log(a + b);
