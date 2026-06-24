//given an integer n, return true if n is palindrome integer and false otherwise
//condidtions:
// n=121 true
// n= -121 false
// n= 10 false

var isPalindrome = function(n) {
    if (n<0){
        return false;
    }
    rev=0;
    nCopy=n
    while(n>0){
        rem=n%10; //to get the remainder
        rev= (rev*10) + rem //to get the reverse. multiplying the rev by 10 because we want to have the next digit of the number and not adding and getting the last digit
        n=Math.floor(n/10) //to remove the last digit
    }
    if (rev==nCopy){
        return true;
    }
    else{
        return false;
    }
}

let n = -12190;
let result = isPalindrome(n);
console.log(result);