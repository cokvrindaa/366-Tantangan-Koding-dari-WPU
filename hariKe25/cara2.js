function doubleChar(str) {
  return (
    str
      //pertama string di ubah menjadi array
      .split("")
      //setiap elemen di array , akan di tempel atau ditambah lagi 1 huruf misal (abcd => aabbccdd)
      .map((el) => el + el)
      //gabungkan setiap kata (dari array ke string.)
      .join("")
  );
}
