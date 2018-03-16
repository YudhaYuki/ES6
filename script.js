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


// ES5
function driversLicence5(passedTest) {

    if (passedTest) {
        var firstName = 'John';
        var yearOfBirth = 1990;
    }

    console.log(firstName + ', borned in ' + yearOfBirth + ', is officially allowed to drive a car');    
}
driversLicence5(true);


// ES6
function driversLicence6(passedTest) {
    
    if (passedTest) {
        let firstName = 'John';
        const yearOfBirth = 1990;
    }

    console.log(firstName + ', borned in ' + yearOfBirth + ', is officially allowed to drive a car');
    
}
driversLicence6(true);
