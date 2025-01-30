import React from 'react';
import ReactDOM from 'react-dom/client';
import Task from './src/pages/Task';
const domRoot = document.getElementById("dom-root");
const parent= ReactDOM.createRoot(domRoot);
const App = ()=>{
    console.log("App rendered.");
    return(
        <div>

            <h1>Hello from React App</h1>
            <Task/>
        </div>
    );

};
parent.render(App());