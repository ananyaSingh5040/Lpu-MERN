import React from "react";
import ReactDOM from 'react-dom/client';
const domRoot= document.getElementById("dom-root");
const parent= ReactDOM.createRoot(domRoot);
const App = ()=>{
    console.log("App rendered <3 ");
    return(
        <div>
            <h1>Hello from App.</h1>
            
        </div>
    );
}
parent.render(App());