module.exports = function reverse (n) {
 let rev = String(Math.abs(n));
    let newString = "";
    for (let i = rev.length - 1; i >= 0; i--) {
        newString += rev[i];
    }
    return parseInt(newString);
}
