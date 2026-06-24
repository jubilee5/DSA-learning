//math.floor - round down
//math.ceil - round up
//math.round - round to the nearest whole number
//math.abs - absolute value

function countDigit(num){
    if(num==0) return 1
   else if (num<0) num = Math.abs(num);
    let count = 0;
    while(num>0){
        num = Math.floor(num/10);
        count++;
    }
    return count;
}

let num = -23450;
let result = countDigit(num);
console.log(result);


//corner cases:
//0
//negative number

