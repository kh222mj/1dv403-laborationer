"use strict";

var count = {
    counter : 0
};

window.onload = function(){

document.getElementById("icon").addEventListener("click", function(){
   
   count.counter++;
   if(count.counter > 1){
       return;
   }
   
   var windo = document.createElement("div");
   windo.id = "window";
   var top = document.createElement("div");
   top.id = "top";
   var content = document.createElement("div");
   content.id = "content";
   var bottom = document.createElement("div");
   bottom.id = "bottom";
   
   windo.appendChild(top);
   windo.appendChild(content);
   windo.appendChild(bottom);
   
   document.getElementById("container").appendChild(windo);
});
  
  
  
  
  
    
};