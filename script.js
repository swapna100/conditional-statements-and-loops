// Program to find the largest of the 2 nos

function Largest2No() {
    var n1,n2;
    n1 = parseInt(prompt("enter first number:"));
    n2 = parseInt(prompt("enter second number:"));
  if(n1>n2)
  {
     document.write(n1+" is Largest number");
  }
  else
  {
     document.write(n2+" is Largest number");
  }
 }

 //Program to find the number is even or odd
 // take input from the user
 function EvenorOdd(){
const number = prompt("Enter a number: ");

// ternary operator
const result = (number % 2  == 0) ? "even" : "odd";
document.write( "The number is "+ result);
 }