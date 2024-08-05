/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {

    let prev = 0 
    let next = 1
    let ans = 0
    nums.forEach((e , idx)=> {
        prev = idx 
        next = idx + 1 
        if ( target === e)  {
            ans = idx 
            return false
        }
        if ( target >= nums[prev] && target < nums[next] ) {
            ans = prev + 1 
            return false
        }
        if ( target > nums[nums.length-1] )  {
            ans = nums.length
            return false
        }
    })



    return ans
};