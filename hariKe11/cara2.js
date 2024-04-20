//object
const rps = (p1, p2) => {
  const rules = {
    rock: "scissors",
    scissors: "paper",
    paper: "rock",
  };
  if (p1 == p2) {
    return "Draw!";
  } else if (rules[p1] === p2) {
    return "Player 1 won!";
  }
  else{
    return "Player 2 won!"
  }
};

console.log(rps("rock", "scissors"));
