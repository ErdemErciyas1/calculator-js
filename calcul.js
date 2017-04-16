var input = 0;
var input2= 0;
var operator="" ;
function buttonClick(button) 

{

document.getElementById('screen').innerHTML=document.getElementById('screen').innerHTML+button;


}

function SetOperator(operatorInput){

operator = operatorInput;

input=document.getElementById('screen').innerHTML;
document.getElementById('screen').innerHTML = "";


} 

function Calculate(){
input2=document.getElementById('screen').innerHTML;
if (operator == "*") {
document.getElementById('screen').innerHTML=Number(input)*Number(input2);


}


if (operator == "-") {
document.getElementById('screen').innerHTML=Number(input)-Number(input2);


}


if (operator == "+") {
document.getElementById('screen').innerHTML=Number(input)+Number(input2);

}

if (operator == "/") {
document.getElementById('screen').innerHTML=Number(input)/Number(input2);

}

}