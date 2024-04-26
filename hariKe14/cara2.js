function getGrade(s1, s2, s3) {
  const nilai = (s1 + s2 + s3) / 3;
  if (nilai < 60) {
    return "F";
  }
  if (nilai < 70) {
    return "D";
  }
  if (nilai < 80) {
    return "C";
  }
  if (nilai < 90) {
    return "B";
  }
  return "A";
}
