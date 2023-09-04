let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegister = true;
let runnerAge = 18;

if (runnerAge > 18 && earlyRegister === true){
  raceNumber += 1000;
}else if (runnerAge > 18 && earlyRegister === true){
  console.log(`Runner number ${raceNumber}, running time 09:30 a.m.!`);
}else if(runnerAge > 18 && earlyRegister === false){
  console.log(`Runner number ${raceNumber}, running time 11 a.m.!`);
}else if(runnerAge < 18){
  console.log(`Runner number ${raceNumber}, running time 12:30 p.m.!`);
}else if(runnerAge = 18){
  console.log(`Check the registration desk!`);
}