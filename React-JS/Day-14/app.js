import React from 'react';
import ReactDOM from 'react-dom/client';
const domRoot = document.getElementById("dom-root");
const parent= ReactDOM.createRoot(domRoot);
const App= ()=>{
    return(
        <div>
            <h1>HEllooooo</h1>
        </div>
    );

}
parent.render(App());
