// if--
if(10>9)
{
    console.log("10 is greater");
}

//if-else--

if(10>11)
{
    console.log("10 is greater");
}
else
{
    console.log("10 is not greater");
}

//if else if else--
let isPaid= true;
if(isPaid)
{
    console.log("User logged in");
}
else if(isPaid=="partial"){
    console.log("pay fully to access");
}
else
{
    console.log("Cannot log in as the subscripotion is unpaid.");
}

//switch case--

let a= 10;
switch(a){
    case a>0:
        console.log("positive");
        break;
    case a<0:
        console.log("negative");
        break;
    default:
        console.log("Number is 0");

}