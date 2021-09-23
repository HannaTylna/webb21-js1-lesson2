//const age = 13;
//const condition = age > 12 && age < 20;

// const condition = 0; (falsk)
// const condition = -1; (true)

//const condition = "hej" // (true)

// const condition = "" // (falskt)
// const condition = " " // (true)

/*
const condition = 0;
if(condition || condition === 0 || condition === "") {
    console.log("Sant!")
} else {
    console.log("Falskt!")
}


if(condition) {
    console.log("Sant!")
} else {
    console.log("Falskt!")
}
*/

/*
const condition = true;
condition ? console.log("sant") : console.log("falskt")
*/

const age = 10;
if(age < 13) {
    console.log("Not a teenager yet!")
} else if(age >= 13 && age <= 19) {
    console.log("Is a teenager!")
} else {
    console.log("The teens are over")
}
