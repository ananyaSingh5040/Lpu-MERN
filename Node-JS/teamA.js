const box= require("./teamB.js");
console.log("Hello");

const ans= box.sum(10,20);
console.log(ans);
const ans2= box.mul(10,20);
console.log(ans2);

const sumArray =(arr)=>{
    let total= 0;
    for(let i=0;i<arr.length;i++)
    {
        total= box.sum(total,arr[i]);
    }
    console.log(total);
}
let arr= new Array(1,2,3,4,5)
sumArray(arr);