const http = require("http");
const getData= async ()=>{
    const res= await fetch ("https://dummyjson.com/products");
    const data = await res.json();
    return data.products;
}

const server = http.createServer(async(req, res) => {
    const path = req.url;
    console.log("-->", path);

    
    res.setHeader("content-type", "text/html");

    if (path == "/") {
        const products= getData();
        
        res.end(`<h1 style='color: red'>HomePage</h1>`);
    } else if (path == "/about") {
        res.end("<h1 style='color: blue'>About Page</h1>");
    } else {
        res.end("<h1 style='color: green'>Oops... Page Not Found!</h1>");
    }
});

server.listen(1010, () => {
    console.log("------ Server Started ------");
});

//nodemonserver.js