function doubleChar(str) {
  let ganda = "";
  for (let i = 0; i < str.length; i++) {
    ganda += str[i];
    ganda += str[i];
  }
  return ganda;
}
console.log(doubleChar("abcd"));
