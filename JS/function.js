// FUNCTION DECLARATION: lets you declare two functions of same name.
function greetings() {
  console.log("Hello All");
}
function greetings() {
  console.log("Hello Mates");
}
greetings();
//can call before declaration as first memory is allocated and then execution happens.

//FUNCTION ASSIGNMENT:
const temp = function hello() {
  console.log("HELLO FROM TEMP");
};
temp();
//cannot be accessed before initialization.

//FUNCTION ASSIGNMENT WITH ANONYMOUS function name:
const anonymous = function () {
  console.log("Hello from anonymous function.");
};
anonymous();
//FUNCTION ASSIGNMENT WITH Arrow function:
const arrow = () => {
  console.log("Hello from arrow function.");
};
arrow();
//Function with parameters
function printData(likes,shares,name)
{
  console.log(`${name} has interacted ${likes} likes and ${shares} shares.`);

}
printData(33,43,"Harshit");
