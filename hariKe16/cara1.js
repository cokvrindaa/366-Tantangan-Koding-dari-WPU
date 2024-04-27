function getAverage(marks) {
  let jumlahdata = 0;
  // tambahin semua data pada array
  for (i = 0; i < marks.length; i++) {
    jumlahdata += marks[i];
  }
  //
  let hasilakhir = Math.floor(jumlahdata / marks.length);
  return hasilakhir;
}
console.log(getAverage([1, 2, 3, 4, 5]));
