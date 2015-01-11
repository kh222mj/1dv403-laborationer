"use strict";

var count = {
    counter : 0
};

var backgrounds = {
    myBackground : [] 
};

window.onload = function(){

document.getElementById("icon").addEventListener("click", function(){
   
   count.counter++;
   if(count.counter > 1){
       return;
   }
   
   var windo = document.createElement("div");
   windo.id = "window";
   
   //top bar
   var top = document.createElement("div");
   top.id = "top";
   var icon = document.createElement("img");
   icon.src = "css/pics/ArrowRight.png";
   icon.id = "arrow";
   top.appendChild(icon);
   var p = document.createElement("p");
   p.innerHTML = "Image Viewer";
   p.id = "pLeft";
   top.appendChild(p);
   var a = document.createElement("a");
   a.id = "exit";
   a.href = "#";
   
   //Kod för att stänga fönster
   a.addEventListener("click", function(){
      var elem = document.getElementById("window");
      elem.parentNode.removeChild(elem);
      count.counter = 0;
   });
   var exit = document.createElement("img");
   exit.src = "css/pics/exit.png";
   a.appendChild(exit);
   top.appendChild(a);
   
   
   //all pictures
   var content = document.createElement("div");
   content.id = "content";
   
   //Load area
   var bottom = document.createElement("div");
   var status = document.createElement("p");
   var ajaxPic = document.createElement("img");
   ajaxPic.src = "css/pics/ajax-loader.gif";
   ajaxPic.id = "ajaxLoader";
   status.innerHTML = "Laddar...";
   status.id = "statusP";
   bottom.appendChild(ajaxPic);
   bottom.appendChild(status);
   bottom.id = "bottom";
   
   windo.appendChild(top);
   windo.appendChild(content);
   windo.appendChild(bottom);
   
   document.getElementById("container").appendChild(windo);
   
   var xhr = new XMLHttpRequest();
   xhr.open("GET", "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/", true);
   xhr.send(null);
   
   xhr.onreadystatechange = function(){
      
      if(xhr.readyState === 4 && xhr.status === 200){
         var req = JSON.parse(xhr.responseText);
         
         //Ta bort ladddaren
         document.getElementById("ajaxLoader").style.visibility = "hidden";
         document.getElementById("statusP").style.visibility = "hidden";
         
         //Ta reda på bredaste bilden
         var maxWidth = 0;
         for(var count = 0; count < req.length; count++){
            if(req[count].thumbWidth > maxWidth){
               maxWidth = req[count].thumbWidth;
            }
         }
         
         //Ta reda på högsta bilden
         var maxHeight = 0;
         for(var counter = 0; counter < req.length; counter++){
            if(req[counter].thumbHeight > maxHeight){
               maxHeight = req[counter].thumbHeight;
            }
         }
      
         //Lägg ut alla bilder + skapa ramar
         for(var i = 0; i < req.length; i++){
            var a = document.createElement("a");
            a.href = "#";
            a.id = req[i].URL;
            var img = document.createElement("img");
            img.src = req[i].thumbURL;
            img.id = "center";
            a.appendChild(img);
            var div = document.createElement("div");
            div.id = "thumbPictures";
            backgrounds.myBackground.push(a);
            div.appendChild(a);
            div.style.heigth = maxHeight + "px";
            div.style.width = maxWidth + "px";
            var content = document.getElementById("content");
            content.appendChild(div);
         }
      }
         
      //Bakgrundsbyte
      NodeList.prototype.forEach = Array.prototype.forEach;
      
      backgrounds.myBackground.forEach(function(a){
         a.addEventListener("click", function(){
            var backgroundURL = "url(" + a.id + ")";
            document.body.style.background = backgroundURL;
         });  
      });
   };
});
};