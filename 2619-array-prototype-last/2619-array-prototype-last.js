/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    const item = this.pop()
    if (item === undefined){
        return -1 
    }
    else {
        return item
    }
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */