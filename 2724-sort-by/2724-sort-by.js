/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    
    arr.sort((a,b)=>{
        return fn(a) > fn(b) ? 1 : -1
    })

    return arr
};