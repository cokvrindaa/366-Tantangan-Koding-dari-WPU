function getAverage(marks) {
  return Math.floor(
    marks.reduce((total, nilaisekarang) => total + nilaisekarang, 0) /
      marks.length
  );
}
