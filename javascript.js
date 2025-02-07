//alert("Welcome telugu webtech");
let a=2;
console.log(a);
a=200;
console.log(a);
const b=20;

console.log(b);
document.writeln("This is awesome");
document.write("<h1>Krishna </h1></br>");
document.write(500);
let fruits=["mango","apple",50,{name:"kalyan"}
]
console.log(fruits,);
console.log(typeof (fruits));
console.log(typeof (a));
console.log(Array.isArray(fruits));
document.writeln("</br>result:", a+b);
document.write(500);
//print 7 table
for(i=1;i<=10;i++)
{
var row="7"+"*"+i+"="+7*i ;
document.writeln("</br>",row);

}
var game="cricket";
var captain="dhoni";
const tennis="sania";
if(game=="Cricket")
{
document.write("</br>","Match captain is dhoni");

}
else if (tennis=="ania")
{
    document.write("</br>","sorry wrong answer");
}
else{document.write("</br>","nothing was matching");}
//alert prompt confirm
//alert("welcome to beauty page.");
   //var p=prompt("Enter your name.");
  // if(p=="lak")
  // {    confirm("do you want to proceed");
   //}
  //else{}
//confirm();

//var woman=confirm("Are you a woman");
//if(woman)
//{
  //  let name=prompt("Enter your name");
    //document.write("</br>","Hello Madam "+name+","+" Welcome to this page.");
//}
//else{
    //let name=prompt("Enter your name");
    //document.write("</br>","Hello Mr."+ name);
//}

//switch-case statements
/*let Name=prompt("Enter your Name");
let marks=prompt("Enter your marks");
switch(true)
{
    case(marks>=90 && marks <100):result="Great you are a topper";
    break;
    case(marks>=60 && marks <90):result="You got a first class";
    break;
    case(marks>=40 && marks <60):result="You got a second class";
    break;
    case(marks>=30 && marks <40):result="You got a Third  class";
    break;
    case(marks<30):result="Sorry you have failed";
    break;
    default:result="Enter your marks";
        break;
}
document.write("</br>"+"Hello "+ Name+","+result);*/

function calculateFactorial(number)
{
    var  factorial=1;
    for (let i= 1; i <= number; i++) 
      {
       factorial =factorial*i;
    }
   // document.write("</br>"+"factorial of the given number is"+factorial);
   return factorial;
}
 let fact=calculateFactorial(6);
 document.write("<br>"+"factorial of the given number is "+fact);