function smash(words) {
  let result = "";
  for (let i = 0; i < words.length; i++) {
    result += words[i];
    if(i != words.length -1){
        result += ' ';
    }

  }
  return result;
}
console.log(smash(["this", "is", "a", "really", "long", "sentence"]));
