function removeExclamationMarks(s) {
    //split untuk menghapus tanda ! , dan join untuk menambahkan sesuatu, seperti "" kosong.
  return s.split("!").join("");
}
console.log(removeExclamationMarks("Hello World!"));
