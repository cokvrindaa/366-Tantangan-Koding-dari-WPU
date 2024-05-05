function feast(beast, dish) {
  let hurufAwalBeast = beast[0];
  let hurufAkhirBeast = beast[beast.length - 1];
  let hurufAkhirDish = dish[dish.length - 1];
  let hurufAwalDish = dish[0];

  if (hurufAwalBeast === hurufAwalDish && hurufAkhirBeast === hurufAkhirDish) {
    return true;
  }
  else{
    return false;
  }
}
console.log(feast("great blue heron", "garlic naan"));
