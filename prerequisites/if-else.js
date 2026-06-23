// write a function to check if a person is eligible to vote or not.

function checkEligibility(age) {
    if (age >= 18) {
        console.log("You are eligible to vote");
    }
    else if (age < 1 ) {
        console.log("Age cannot be negative");
    }
    else {
        console.log("You are not eligible to vote");
    }
}

checkEligibility(-17);
checkEligibility(47);

// check if a number is even or odd
function isEvenOdd(num){
    if (num %2 == 0){
        console.log ("The number " + num + " is even");
    }
    else {
        console.log("The number " + num + " is odd");
    }
}

isEvenOdd(4);
isEvenOdd(5);