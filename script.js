const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

clipboardEl.addEventListener("click", () => {
  const copyText = resultEl.textContent;
  navigator.clipboard.writeText(copyText).then(() => {
    // Alert the user that the action took place.
    // Nobody likes hidden stuff being done under the hood!
    alert("Copied to clipboard");
  });
});

generateEl.addEventListener("click", () => {
  generatePassword(
    randomFunc.lower,
    randomFunc.upper,
    randomFunc.number,
    randomFunc.symbol,
    lengthEl.value
  );
});

function generatePassword(lower, upper, number, symbol, length) {
  let randomIn = [];

  if (lowercaseEl.checked) randomIn.push(lower);

  if (uppercaseEl.checked) randomIn.push(upper);

  if (numbersEl.checked) randomIn.push(number);

  if (symbolsEl.checked) randomIn.push(symbol);

  let password = "";

  for (let i = 0; i <= length; i++) {
    password += randomIn[Math.floor(Math.random() * randomIn.length)]();
  }
  resultEl.textContent = password;
}

function getRandomLower() {
  const randomLower = "qwertyuioplkjhgfdsazxcvbnm";
  return randomLower[Math.floor(Math.random() * randomLower.length)];
}

function getRandomUpper() {
  const randomUpper = "QWERTYUIOPLKJHGFDSAZXCVBNM";
  return randomUpper[Math.floor(Math.random() * randomUpper.length)];
}

function getRandomNumber() {
  const randomNumber = "1234567890";
  return randomNumber[Math.floor(Math.random() * randomNumber.length)];
}

function getRandomSymbol() {
  const randomSymbol = "@#$&";
  return randomSymbol[Math.floor(Math.random() * randomSymbol.length)];
}

// console.log(
//   getRandomLower(),
//   getRandomUpper(),
//   getRandomNumber(),
//   getRandomSymbol()
// );
