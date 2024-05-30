const arr=[{ id: "42", name: "Bruce", occupation: "Knight", age: 41 }, 
{ id: "48", name: "Barry", occupation: "Runner", age: 25 }, 
{ id: "57", name: "Bob", occupation: "Fry Cook", age: 19 }, 
{ id: "63", name: "Blaine", occupation: "Quiz Master", age: 58 }, 
{ id: "7", name: "Bilbo", occupation: "None", age: 111 }]
console.log(arr);
let fun1= function passByRef(arr){
   arr.age=arr.age+1;
   return arr;
}
console.log(fun1);
console.log(arr);