// IM Back
function updateLight(current) {
  //your code here!

  //   kalau hasil hasil current itu green maka kembalikan yellow
  if (current == "green") {
    return "yellow";
  }
    //   kalau hasil hasil current itu yellow maka kembalikan red
  if (current == "yellow") {
    return "red";
  }
    //   kalau hasil hasil current itu red maka kembalikan green
  if (current == "red") {
    return "green";
  }
}
console.log(updateLight("red"));
