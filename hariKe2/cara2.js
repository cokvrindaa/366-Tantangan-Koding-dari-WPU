reverseSeq = (n) => {
  return Array(n)
    .fill()
    .map((el ,i) => i + 1)
    .reverse()
};
console.log(reverseSeq(5))
