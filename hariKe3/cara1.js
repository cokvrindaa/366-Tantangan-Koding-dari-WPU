function hero(bullets, dragons) {
  bullets = bullets / 2;
  if(bullets >= dragons){
    return true;
  }
  else{
    return false;
  }
}
console.log(hero(1500 , 751));