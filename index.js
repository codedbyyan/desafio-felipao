//Exercício para dizer se o número é par ou impar com arrays.
let impar = [];
let par = [];

for (let i = 0; i < 5; i++) {
  let number = Number(prompt("Digite um número aleatório:"));
  if (number % 2 === 0) {
    par.push(number);
  } else {
    impar.push(number);
  }
}

console.log("Os números pares são: " + par.join(", "));
console.log("Os números ímpares são: " + impar.join(", "));
