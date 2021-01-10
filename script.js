// Homework 01

// function isOddOrEven(number) {
//     if (isNaN(number)){
//         return `Wrong input. Enter number!`;
//     }else if(number === 0){
//         return `You entered 0`;
//     }
//      else if  (number % 2 === 0) {
//         return `Number ${number} is even number.`;
//     } else {
//         return `Number ${number} is odd number.`;
//     }
// }

// let userNumInput = parseInt(prompt(`Input number to see if is odd or even`));
// console.log(isOddOrEven(userNumInput));


// Homework 02

// function convertToSeconds(minutes) {
//     if (isNaN(minutes)) {
//         return `Wrong input. Enter number!`;
//     } else if (minutes === 0) {
//         return `You entered 0`;
//     } else {
//         return minutes * 60;
//     }
// }
// let userInputMinuts = parseInt(prompt(`Insert minutes to convert to seconds`));
// console.log(convertToSeconds(userInputMinuts));


// Homework 03

// function totalPoints(twoPoints, threePoints) {
//     if (isNaN(twoPoints) || isNaN(threePoints)) {
//         return `Wrong input. Enter number!`;
//     } else {
//         return (twoPoints * 2) + (threePoints * 3);
//     }
// }

// let userInputTwoPoints = parseInt(prompt(`Insert total 2-pointers scored`));
// let userInputThreePoints = parseInt(prompt(`Insert total 3-pointers scored`));
// console.log(totalPoints(userInputTwoPoints, userInputThreePoints));


// Homework 04

// function howManyLegs(chicken, cow, pig){
//     if (isNaN(chicken) || isNaN(cow) || isNaN(pig)) {
//         return `Wrong input. Enter number!`;
//     } else {
//         return (chicken * 2) + (cow * 4) + (pig * 4);
//     }
// }

// let userInputChicken = parseInt(prompt(`Insert number of chicken`));
// let userInputCow = parseInt(prompt(`Insert number of cows`));
// let userInputPig = parseInt(prompt(`Insert number of pigs`));
// console.log(howManyLegs(userInputChicken, userInputCow, userInputPig));


// Homework 05

// function calculate(num1, num2, operator) {
//     if (isNaN(num1) || isNaN(num2)) {
//         return `Enter number!`
//     } else if ((operator === `%` || operator ===`/`) && num2 === 0) {
//         return `You cannot devide with 0`;
//     }
//     switch (operator) {
//         case `+`:
//             return num1 + num2;

//         case `-`:
//             return num1 - num2;

//         case `*`:
//             return num1 * num2;

//         case `/`:
//             return num1 / num2;

//         case `%`:
//             return num1 % num2;

//         default:
//             return `Invalid input`
//     }
// }

// let userInputNum1 = parseInt(prompt(`Insert number1`));
// let userInputNum2 = parseInt(prompt(`Insert number2`));
// let userInputOperator = prompt(`Chose one operator ( +, -, *, /, or %) for calcualtion`);
// console.log(calculate(userInputNum1, userInputNum2, userInputOperator));


// Homework 06

// function comp(string1, string2) {
//     let lenString1 = string1.length;
//     let lenString2 = string2.length;

//     if (lenString1 === lenString2) {
//         return true;
//     }
//     return false;
// }

// let userInputString1 = prompt(`Enter string1:`);
// let userInputString2 = prompt(`Enter string2:`);
// console.log(comp(userInputString1, userInputString2));


// Homework 07

// function shouldServeDrinks(ageCustomer, breakTime) {
//     if (ageCustomer <= 17 || breakTime === `true`) {
//         return false;
//     }   
//     return true;
// }

// let userInputCustomerAge = parseInt(prompt(`Enter customer age (only numbers):`));
// let userInputBreakTime = prompt(`Enter 'true' if bartender is on break and 'false' if he is not`);
// console.log(shouldServeDrinks(userInputCustomerAge, userInputBreakTime));


// Homework 08

// function moodToday(mood){
//     if(isNaN(mood)){
//         return `Today I'm feeling ${mood}` 
//     }
//     return `Today, I am feeling neutral`
// }

// let userInputMood = prompt(`How do you feel today?`);
// console.log(moodToday(userInputMood));


// Homework 09

// function equalSlices(numSlices, numRecipients, slicesPerPerson) {
//     if (isNaN(numSlices) || isNaN(numRecipients) || isNaN(slicesPerPerson)) {
//         return `Wrong input. Enter only integers!`
//     } else if ((slicesPerPerson * numRecipients) <= numSlices) {
//         return true;
//     }
//     return false;
// }

// let userInputNumSlices = parseInt(prompt(`Enter number of slices:`));
// let userInputNumRecipients = parseInt(prompt(`Enter number of recipients:`));
// let userInputSlicesPerPerson = parseInt(prompt(`Enter number of slices per person:`));
// console.log(equalSlices(userInputNumSlices, userInputNumRecipients, userInputSlicesPerPerson));

// Homework 10

function totalCups(numCups) {
    
    if (isNaN(numCups) || numCups < 0) {
        return `Wrong input!`
    }
    if (numCups >= 6) {
        return parseInt((numCups / 6)) + numCups;
    }
    return numCups;
}

let userInputNumCups = parseInt(prompt(`Enter number of cups:`));
console.log(totalCups(userInputNumCups));
