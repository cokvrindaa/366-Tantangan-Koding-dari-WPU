const reverseSeq = (n) => {
  // i itu var dari n, n itu var reverseSeq,
  //ketika i lebih besar dari satu maka nilai i itu mengurang
  //Contoh = 5 lebih besar dari 1 maka nilainya berkurang menjadi 4
  const result = [];
  for (let i = n; i >= 1; i--) {
    result.push(i);
}
  return result;
};

console.log(reverseSeq(5));
