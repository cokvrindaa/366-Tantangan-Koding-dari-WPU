const areaOrPerimeter = function (l, w) {
  if (l == w) return l * w; //kotak (persegi)
  else return 2 * (l + w); //persegi panjang
};
console.log(areaOrPerimeter(3, 3));
