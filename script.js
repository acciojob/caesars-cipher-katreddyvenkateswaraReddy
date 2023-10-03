// Your Script here.

const lookup = {
  A: "N",
  B: "O",
  C: "P",
  D: "Q",
  E: "R",
  F: "S",
  G: "T",
  H: "U",
  I: "V",
  J: "W",
  K: "X",
  L: "Y",
  M: "Z",
  N: "A",
  O: "B",
  P: "C",
  Q: "D",
  R: "E",
  S: "F",
  T: "G",
  U: "H",
  V: "I",
  W: "J",
  X: "K",
  Y: "L",
  Z: "M",
  "?": "?",
  ",": ",",
};

function rot13(encodedStr) {
  let decodedArr = [];

  for (let i = 0; i < encodedStr.length; i++) {
    const char = encodedStr[i];

    // Check if the character is in the lookup table
    if (lookup[char] !== undefined) {
      decodedArr.push(lookup[char]);
    } else {
      // If the character is not in the lookup table (non-alphabetic), pass it unchanged
      decodedArr.push(char);
    }
  }

  // Join the characters in the array to form the decoded string
  return decodedArr.join("");
}

// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(rot13("SERR YBIR? NPPVBWBO"));

// Do not change this line
window.rot13 = rot13;
