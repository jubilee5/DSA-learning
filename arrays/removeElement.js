// given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

var removeElement = function(nums, val) {
    let x=0;
    for (let i=0 ; i<nums.length ; i++){
        if (nums[i] != val){
            
            nums[x]=nums[i];
            x=x+1;
        }
    }
    return x;
    } 

    let val = 3
    let nums = [0,0,1,1,1,2,2,3,3,4];
    let result = removeElement(nums, val);
    console.log(result);