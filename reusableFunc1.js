let arr=[4,7,9,10];
//Take an array of numbers and return the sum.
let sum=getSum(arr);
function getSum(arrf){
    console.log(arrf);
    let s=0;
    for(let i=0;i<arrf.length;i++){
    s=s+arrf[i];
    
    }
    return s;
}

console.log("Sum = "+sum);
//Take an array of numbers and return the average.
let average= getAverage(arr);
function getAverage(arrf)
{
    let av=0, average=0;
    for(let i=0;i<arrf.length;i++){
        av=av+arrf[i];
        
        }
    average= av/arrf.length;
        return average;

}
console.log("Average = "+average);

//Take an array of strings and return the longest string.
let strArray=['this','one','everything','together'];
let longString= getLongestStr(strArray);
function getLongestStr(str){
    console.log(str);
    let longstrl=str[0].length;
    let longstr=str[0];
    for(let i=1;i<str.length;i++){
        if(longstrl<str[i].length){
            longstrl=str[i].length;
            longstr=str[i];
        }
    }
    return longstr;
}
console.log("Longest String in the Array = "+longString);
//Take an array of strings, and a number and return an array of the strings 
//that are longer than the given number. 
//For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);
// would return ["hello", "morning"].
let stArray=['say', 'hello', 'in', 'they', 'morning'];
let num=3;
let returnStrArray=getStringArraysLongerThanNum(stArray,num);
function getStringArraysLongerThanNum(str,num){
    let longstrlen=num;
    let longStrArr=[];
    //let longstr=str[0];
    for(let i=0;i<str.length;i++){
        if(str[i].length>longstrlen){
            longStrArr.push(str[i])
        }
    }
    return longStrArr;
}
console.log("Result Array Longer than the number passed to the Function is ");
console.log(returnStrArray);
//Recursion
function f(x) {
    // Print the current value of x followed by a space
    console.log(x + " ");
    
    // If x is less than 100, recursively call f with x+1
    // Otherwise, stop recursion
    if (x < 100) {
        return f(x + 1);
    }
}

function main() {
    // Call the function f with an initial value of 1
    f(1);
}

// Calling the main function
main();


