/* 1. Even Odd Reporter
Schrijf een loop die "iterate" van 0 tot 20. 
Voor elke loop, check of het huidige nummer even is of oneven (odd).
Console.log het nummer.

Tip: gebruik de modulo functionaliteit.

Resultaat in de console:
1 is oneven 
2 is even 
3 is oneven 
4 is even 
etc....  */

var ourArray = []
for (i = 0; i <= 20; i++) {
  // console.log will give the numbers 1 to 20.
  console.log('0' + i);
  //this will give the even numbers.
} for (i = 0; i <= 20; i += 2) {
  console.log('0' + i + ' ' + 'is even');

} for (i = 1; i <= 20; i += 2) {

  console.log('0' + i + ' ' + 'is odd');
}

