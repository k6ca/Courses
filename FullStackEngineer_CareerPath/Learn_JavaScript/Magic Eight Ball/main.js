let userName = '';

if(userName){
  console.log('Hello, ' + userName + "!");
}else{
  console.log('Hello!');
}

let userQuestion = 'What fuck?!';
console.log(userQuestion);
let randomNumber = Math.floor(Math.random() * 8);
console.log(randomNumber);
let eightBall = randomNumber;

switch (eightBall) {
  case 0:
    console.log('It is certain');
    break;
  case 1:
    console.log('It is decidedly so');
    break;
  case 2:
    console.log('Reply hazy try again');
    break;
  case 3:
    console.log('Cannot predict now');
    break;
  case 4:
    console.log('Do not count on it');
    break;
  case 5:
    console.log('My sources say no');
    break;
  case 6:
    console.log('Outlook not so good');
  break;
    case 7:
    console.log('Signs point to yes');
  break;
    case 8:
    console.log('Sucesso');
  break;
    default:
    console.log('OK');
    break;
}
