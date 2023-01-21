let inputItem=document.getElementById("inpt");
let inputdate=document.getElementById("inptdate");
var x = document.getElementById("pri").selectedIndex;
var prio=document.getElementsByTagName("option")[x].value;
let btn=document.getElementById("btn");


let task=JSON.parse(localStorage.getItem('tasks')) || []
btn.addEventListener('submit',(e)=>{
    e.preventDefault()

})
