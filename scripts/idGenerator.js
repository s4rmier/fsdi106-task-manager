function generateID() {
  let randomID = "";
  const min = 1000000000;
  const max = 9999999999;
  randomID = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomID;
}
