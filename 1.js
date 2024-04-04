function grow(x) {
    let hasil = x[0];
    for(let i = 1; i < x.length; i++){
        hasil *= x[i];
    }
    return hasil;
}
// 1234 itu x nya
console.log(grow([1, 2, 3, 4]));
