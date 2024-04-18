var min = function(list){
    //metode mtk
    return Math.min(...list);
}

var max = function(list){
    // ("...") untuk mengubah dari angka aray ke angka biasa.
    return Math.max(...list);
}
console.log(min([-52, 56, 30, 29, -54, 0, -110]))
console.log(max([4,6,2,1,9,63,-134,566]))
