const sum= require("./teamB.js");
console.log("A");

const sumArray =(arr)=>{
    let total= 0;
    console.log("F")
    for(let i=0;i<arr.length;i++)
    {
        total= sum(total,arr[i]);
    }
    console.log(total);
}
console.log("B");
let arr= new Array(1,2,3,4,5)
sumArray(arr);