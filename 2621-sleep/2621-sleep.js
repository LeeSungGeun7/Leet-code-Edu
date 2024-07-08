/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    let t = Date.now();

    let p1 = new Promise(function (resolve, reject) {
        setTimeout(() => resolve(()=>{return (Date.now() - t)}), millis);
    });

    await p1;



}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */