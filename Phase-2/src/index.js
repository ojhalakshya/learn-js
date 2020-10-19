
function greet(name, lastName)
{
  console.log("Hello " + name + " " + lastName);
}

square = (a) =>
{
  return a * a;
}

greet("Lakshya", "Ojha");
greet("Kartik");

let number = 4;
number = square(number);
console.log(number);
console.log(square(3));