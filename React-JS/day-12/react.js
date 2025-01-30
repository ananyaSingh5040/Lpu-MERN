//purana way of writing react.
const parent = document.getElementById("dom-root");
const root = ReactDOM.createRoot(parent);
// const newTitle= React.createElement("h2",{},"HEllo from React ");
// const newPara= React.createElement("p",{},"Bleh ");
// const container= React.createElement("div",{},[newTitle,newPara]); //multiple child should be passed in an array.
// const heading = React.createElement("h2", {}, "This is a heading.");
// const para = React.createElement("p", {}, "This is a paragraph.");
// const li1 = React.createElement("li", {}, "Apple");
// const li2 = React.createElement("li", {}, "Banana");
// const unorderList = React.createElement("ul", {}, [li1,li2]);
// const container = React.createElement("div", {}, [
//   heading,
//   para,
//   unorderList
// ]);
// const title= React.createElement("h2",{
//   className: "title-box",
// },
// "HELLOOOOO");

// root.render(container);
// root.render(title);

//JSX- javascript XML - converts the code into js by using Transpiler like Babel.
// const title = (
//   <h2 className= "title-box">Hello From React</h2>
// )
// root.render(title);
// const card = (
//   <div className="card">
//     <h2 className="heading">This is a heading.</h2>
//     <p>This is a paragraph</p>
//     {/* <img src="React-JS/day-12/PIA00404~large.webp" /> */}
//   </div>
// );
// const container= React.createElement("div",{},[card,card])
//A react component:
const Card = (props) => {
  return (
    <div className="card">
      <h2 className="heading">Hello from {props.username}.</h2>
      <p>{props.greetings}! How are you?</p>
      {/* <img src="React-JS/day-12/PIA00404~large.webp" /> */}
    </div>
  );
};
// const container = (
//   <div>
//     {/* {card}
//     {card} */}
//     {/* {Card("Ananya")}  */}
//     {/* {Card("Aryan")}  */}
//     {/* You need to call the component. */}
//     <Card username="Aryan" greetings="Good Morning" />
//     <Card username="Ananya" greetings="Hello" />
//     {/* using props. */}
//   </div>
// );
//Component:
const Container= ()=>{
  return(
    <div>
      <Card username="Ananya" greetings="Good Morning"/>
      <Card username="Aryan" greetings="Hello"/>
    </div>

  );
}
root.render(<Container/>);
