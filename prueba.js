//Provando
//   var saludar=()=>{
//     console.log("Hola mundo")
//   } 
//   saludar();
  /*Pasando funciones a (funciones fecha)*/
  //1
  /*document.getElementById("button").onclick = function() {
    setBackgroundColorById("paragraph", "blue");
}*/
document.getElementById("button").onclick=()=>{
    setBackgroundColorById("paragraph", "blue");
}
//2
/*document.getElementById("alert").onclick = function(){
    alert(document.getElementById("popup-input").value);
}*/
document.getElementById("alert").onclick =()=>{
    alert(document.getElementById("popup-input").value);
}
//3
/*document.getElementById("hover-this").onmouseover = function(){
    setBackgroundColorById("body", "red");
}*/
document.getElementById("hover-this").onmouseover =()=>{
    setBackgroundColorById("body", "red");
}
//4
/* document.getElementById("hover-this").onmouseout = function(){
     setBackgroundColorById("body", "white");
 }*/
document.getElementById("hover-this").onmouseout =()=>{
setBackgroundColorById("body", "white");
}
//5
/*function getValueFromId(id){
    return document.getElementById(id).value;
}*/
const getValueFromId = id => document.getElementById(id).value;
//6
/*function setBackgroundColorById(id, color){
    document.getElementById(id).style = "background-color: " + color;
}*/
const setBackgroundColorById=(id,color)=>{
    document.getElementById(id).style = "background-color: " + color;
}
//7
/* function mouseOverFunction(el){
     el.style = "background-color: black";
 }*/
const mouseOverFunction = el => {
    el.style.backgroundColor = "black";
};
