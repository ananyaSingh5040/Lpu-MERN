//purana way of writing react.
const parent = document.getElementById("dom-root");
const root = ReactDOM.createRoot(parent);
// const newTitle= React.createElement("h2",{},"HEllo from React ");
// const newPara= React.createElement("p",{},"Bleh ");
// const container= React.createElement("div",{},[newTitle,newPara]); //multiple child should be passed in an array.
const heading = React.createElement("h2", {}, "This is a heading.");
const para = React.createElement("p", {}, "This is a paragraph.");
const li1 = React.createElement("li", {}, "Apple");
const li2 = React.createElement("li", {}, "Banana");
const unorderList = React.createElement("ul", {}, [li1,li2]);
const container = React.createElement("div", {}, [
  heading,
  para,
  unorderList
]);

root.render(container);
