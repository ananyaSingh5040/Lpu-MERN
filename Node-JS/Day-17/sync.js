const fsPromises = require("node:fs/promises");

async function myReadFile() {
  console.log("--> Reading");
  try {
    const ans = await fsPromises.readFile("./cache.txt", "utf-8");
    console.log("--> ans", ans);
} 
catch (error) {
    console.log("Error reading file:", error.message);
}
}

myReadFile();
