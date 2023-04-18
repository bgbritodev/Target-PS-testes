let string = prompt("Digite uma string:");

let invertedString = "";

for (let i = string.length - 1; i >= 0; i--) {
  invertedString += string[i];
}

console.log(invertedString);

document.write("<h1>" + invertedString + "</h1>")