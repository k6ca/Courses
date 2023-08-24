//Kelvin constant 293
const kelvin = 0;
//Celsius is 273 less than Kelvin
var celsius = kelvin - 273;
//Equation to fin Fahrenheit value
//math.floor, to round fahrenheit value
var fahrenheit = (celsius * (9/5)+32);
fahrenheit = (Math.floor(fahrenheit));
var newton = celsius * (33/100);
newton = (Math.floor(newton));

console.log(`The temperature is ${kelvin} degrees Kelvin`);
console.log(`The temperature is ${celsius} degrees Celsius`);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);
console.log(`The temperature is ${newton} degrees Newton`);