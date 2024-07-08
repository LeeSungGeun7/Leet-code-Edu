/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {

    ans = []
    arr.forEach((e,idx)=>{
        ans.push(fn(e,idx))
    })
    return ans
};