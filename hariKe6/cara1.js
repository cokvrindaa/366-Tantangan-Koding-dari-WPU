function DNAtoRNA(dna) {
  let rna = '';
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "T") {
      rna += "U";
    } else {
      rna += dna[i];
    }
  }
  return rna;
}
console.log(DNAtoRNA("TTTT"));
