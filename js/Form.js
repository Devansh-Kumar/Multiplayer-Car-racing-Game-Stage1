class Form{
constructor(){

}  
display(){
var title = createElement('h2');
title.html("Multiplayer Car Racing Game")
title.position(430,30);
var input = createInput("");
input.position(430,80);
var button = createButton("Play");
button.position(625,80);
var greeting = createElement('h3');
greeting.position(430,80);
button.mousePressed(function (){
input.hide();
button.hide();
var name = input.value();
greeting.html("Hello "+name);    
})   
}  
}