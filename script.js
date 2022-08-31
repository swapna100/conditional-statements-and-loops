// Program to find the largest of the 2 nos

function Largest2No() {
    var n1,n2;
    n1 = 15;
    n2 = 5;
  if(n1>n2)
  {
     
     console.log(n1+" is Larger than "+ n2);
  }
  else
  {
     
     console.log(n2+" is Larger than " + n1);
  }
 }
Largest2No();

 //Program to find the number is even or odd
 // take input from the user
 function EvenorOdd(){
const number = 36;

// ternary operator
const result = (number % 2  == 0) ? "even" : "odd";
console.log(`The number ${number} is `+ result);
 }
 EvenorOdd();