function sumAsync(x, y) {
    const p = new Promise((resolve, reject) => {
        resolve(x + y);                        
    });
    return p;
}
sumAsync(5, 7).then((result) => {
    console.log("The result of the addition is:", result);
});
function sumAsync(x, y) {
    return new Promise((resolve, reject) => {
        // run this in 500ms from now
        setTimeout(() => {
            if (x < 0 || y < 0) {
                reject("Negative values received");
            } else {
                resolve(x + y);
            }
        }, 500);

        // we don't need to return anything
    });
}

sumAsync(-5, 7).then((result) => {
    console.log("The result of the addition is:", result);
}).catch((error) => {
    console.log("Error received:", error);
});