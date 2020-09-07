function assignGrade(score) {
  if (score > 90) {
    return 'A';
  } else if (score > 80) {
    return 'B';
  } else if (score > 70) {
    return 'C';
  } else if (score > 65) {
    return 'D';
  } else {
    return 'F';
  }
}
for (i = 91; i <= 100; i++) {
  console.log('Voor' + ' ' + i + ' ' + 'punten', 'krijg je een' + ' ' + 'A');

}
for (i = 81; i <= 90; i++) {
  console.log('Voor' + ' ' + i + ' ' + 'punten', 'krijg je een' + ' ' + 'B');

}
for (i = 71; i <= 80; i++) {
  console.log('Voor' + ' ' + i + ' ' + 'punten', 'krijg je een' + ' ' + 'C');

}
for (i = 66; i <= 70; i++) {
  console.log('Voor' + ' ' + i + ' ' + 'punten', 'krijg je een' + ' ' + 'D');

}
for (i = 0; i <= 65; i++) {
  console.log('Voor' + ' ' + i + ' ' + 'punten', 'krijg je een' + ' ' + 'F');

}
