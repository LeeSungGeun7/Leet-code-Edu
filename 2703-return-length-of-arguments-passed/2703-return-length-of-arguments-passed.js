/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */

var argumentsLength = function(...args) {
    return args.length
};
// 손가락이 달려있는지 테스트 하는 문제 
/**
 * argumentsLength(1, 2, 3); // 3
 */