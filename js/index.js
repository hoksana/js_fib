/*
var namb = 1;
var nambe = 1;
var nambr;
var num = prompt('Напишіть будь ласка число');
document.write(namb+'<br>');
document.write(nambe+'<br>');

for(var fib = 3; fib <= num; fib++)
{
    nambr = namb + nambe;
    namb = nambe;
    nambe = nambr;
    
    document.write(nambr+'<br>');
}
*/
function getInput(text) {
  var input = Number(prompt(text));

  return input = input ? input : getInput('Bad input. Give me a number position');
}

function findFibonacciLoop(position) {
  var numbers = [1, 1];

  for (var n = 2; n < position; n++) {
    numbers[n] = numbers[n - 1] + numbers[n - 2];
  }

  return numbers[position - 1];
}

function findFibonacciRecursion(position) {
  var numbers = [1, 1],
    n = position - 1;

  if (numbers[n]) { return numbers[n]; }

  numbers[n] = numbers[n - 1] + numbers[n - 2];

  return numbers[n] ? numbers[n] : findFibonacciRecursion(n) + findFibonacciRecursion(n - 1);
}

var position = getInput('Please enter a number position');
document.write('Loop: ' + findFibonacciLoop(position) + '<br>' + 'Recursion: ' + findFibonacciRecursion(position));