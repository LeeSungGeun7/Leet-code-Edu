/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    dict = {}
    let arr = [...arr1 , ...arr2]
    // arr.forEach((e)=>{
    //     if (e.id) {
    //         dict[e.id] = {...e[e.id] , ...e}
    //     } else {
    //         dict[e.id] = e
    //     }
    // })
    for(let obj of arr){
        let id = obj.id;
    if  (dict[id]){
        dict[id] = {...dict[id],...obj}
    }
    else{
    dict[id] = obj;
    }
    }
    return Object.values(dict)
};