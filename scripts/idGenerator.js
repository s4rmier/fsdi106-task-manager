function generateID() {
  const setsOfNumbers = 3;
  const numbersPerSet = 3;
  let randomID = "";

  for (let i = 0; i < setsOfNumbers; i++) {
    let set = "";
    for (let j = 0; j < numbersPerSet; j++) {
      set += Math.floor(Math.random() * 10);
    }
    randomID += set;
    if (i < setsOfNumbers - 1) {
      randomID += "-";
    }
  }

  return randomID;
}
