//given a signed 32 bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32 bit integer range [-2^31, 2^31 - 1], then return 0.


var reverse = function(x) {
    xCopy = x
    let rev = 0;
    x = Math.abs(x);
    while (x > 0) {
        let rem = x % 10;
        rev = (rev * 10) + rem;
        x= Math.floor(x / 10);
    }

    
  let limit = Math.pow(2, 31) ;
    if (rev > limit || rev < -limit) {
        return 0;
    }
    return (xCopy < 0) ? -rev : rev;
        
}

let x = 123;
let result = reverse(x);
console.log(result);