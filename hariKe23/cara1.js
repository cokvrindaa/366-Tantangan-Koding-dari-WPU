function monkeyCount(n) {
  let hasil = [];
  //n "<=" agar tidak mulai dari 0.
  for (let i = 1; i <= n; i++) {
    //selama i kurang dari n , maka akan menampilkan hasil contoh (1,2,3,4,5)
    hasil.push(i);
  }
  return hasil;
}
console.log(monkeyCount(5));
