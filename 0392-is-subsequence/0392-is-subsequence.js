/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

 
var isSubsequence = function(s, t) {
    let c = 0 ;
    
    for ( let i = 0; i < t.length ; i++) {
        if ( s.charAt(c) === t.charAt(i)) {
            c += 1 
        } else {

        }
    }
    return c === s.length ? true : false

};