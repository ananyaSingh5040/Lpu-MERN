const sum= require("./teamB.js");
console.log("A");

const sumArray =(arr)=>{
    let total= 0;
    console.log("F")
    for(let i=0;i<arr.length;i++)
    {
        total= sum(total,arr[i]);
    }
    return total;
}
console.log("B");

module.exports={
    sumArray,
};