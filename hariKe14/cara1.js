function getGrade(s1, s2, s3) {
  const nilai = (s1 + s2 + s3) / 3;
  if (nilai <= 100 && nilai >= 90) {
    return 'A'
  }
  else if (nilai <= 90 && nilai >= 80){
    return 'B'
  }
  else if (nilai <= 80 && nilai >= 70){
    return 'C'
  }
  else if (nilai <= 70  && nilai >= 60){
    return 'D'
  }
  else if (nilai >= 0){
    return 'F'
  }
  return nilai;
}
console.log(getGrade(70,70,100));
