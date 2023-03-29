let userName = 'heba';
userName ? console.log(`hello ${userName}`) : console.log('Hello');
let userQuestion = 'What is Ure Fav Book';
console.log(userQuestion);
let randomNumber= Math.floor(Math.random()*8)
let eightBall = '';

switch (randomNumber) {
  case 1 :
  eightBall = ' Things Fall Apart by Chinua Achebe (1958)'
  break;

  case 2 :
  eightBall = 'The God of Small Things by Arundhati Roy (1997)'
  break;

  case 3 :
 eightBall = 'Beloved by Toni Morrison (1987)'
  break;

  case 4 :
 eightBall = 'The Handmaid’s Tale by Margaret Atwood (1985)'
  break;

  case 5 :
eightBall = ' Blood Meridian by Cormac McCarthy (1985)'
  break;

  case 6 :
eightBall = 'A Fine Balance by Rohinton Mistry (1995)'
  break;

  case 7 :
eightBall = 'Infinite Jest by David Foster Wallace (1996)'
  break;

  case 8 :
eightBall = 'Slaughterhouse Five by Kurt Vonnegut (1969)'
  break;
}
console.log(`The eight ball answered: ${eightBall}.`); 
