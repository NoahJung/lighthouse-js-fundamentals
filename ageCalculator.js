function ageCalculator(name, yearB, yearC){
  var age = yearC - yearB;
  var result = name + " is " + age + " years old."
  return result;
}

//"Suzie is 32 years old."

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));