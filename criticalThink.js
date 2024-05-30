const arr=[{ id: "42", name: "Bruce", occupation: "Knight", age: "41" }, 
{ id: "48", name: "Barry", occupation: "Runner", age: "25" }, 
{ id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, 
{ id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, 
{ id: "7", name: "Bilbo", occupation: "None", age: "111" }]
console.log(arr);
const sortedAgeArr=arr.sort(function(a1,a2){
    
    if(parseInt(a1.age)>parseInt(a2.age))
        return 1;
    else
    return -1;
});
console.log("Sorted by Age Array");
console.log(sortedAgeArr);
//Filter by Age <50
const filterByAge= arr.filter(function(a1){
    if(parseInt(a1.age)<50)
        return true;
    else
    return false;
});
console.log("Filter by Age<50");
console.log(filterByAge);
//Map 
const mapArr= arr.map(function(a){
    return `id: '${a.id}' ,name: '${a.name}' ,job: '${a.occupation}', age: '${parseInt(a.age)+1}' `;
});
console.log(mapArr);