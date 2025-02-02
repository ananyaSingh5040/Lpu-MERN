const fs = require("node:fs");
// console.log(ans);
const start= Date.now();
function readFile(){
    const ans= fs.readFileSync("./cache.txt","utf-8");
    console.log("Reading done:\n",ans);
    console.log("-----------------------------------\n");

}
const end= Date.now();
readFile();
console.log("Time-Taken: ",end);