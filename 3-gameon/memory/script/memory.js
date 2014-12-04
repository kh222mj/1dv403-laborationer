"use strict";

var Memory = {

    array : [],

    init : function()
    {
        var cols = 4;
        var rows = 4;
        var random = new RandomGenerator.getPictureArray(cols,rows);
        Memory.array = random;

        var tabell = document.getElementById("tabell");
        var test = 0;


        for (var r = 0; r < rows; r++)
        {
            var tr = document.createElement("tr");

            for(var c = 0; c < cols; c++)
            {
                var td = document.createElement("td");
                var img = document.createElement("img");
                var source = "pics/" + Memory.array[test] + ".png";
                img.src = source;
                img.setAttribute("class", "hidden");
                
                var a = document.createElement("a");
                a.setAttribute("href", "#");
                
                a.appendChild(img);
                test++;
                td.appendChild(a);
                tr.appendChild(td);
            }
            tabell.appendChild(tr);
        }
        Memory.doStuff();
    },
    
    doStuff : function(){
        var aS = document.querySelectorAll("#tabell a");
        
        var counter = 0;
        
        NodeList.prototype.forEach = Array.prototype.forEach;
        
        var imgArray = [];
        
        aS.forEach(function(a){
            
            a.addEventListener("click", function(){
                
                var img = a.firstChild;
                imgArray.push(img);
                var test = "";
                
                //Redan vänd
                if (img.className == "visible"){
                    alert("Den här är redan vänd!");
                    imgArray = [];
                    return;
                }
                // Trycker på samma
                if (imgArray[0] == imgArray[1]){
                    imgArray[0].classList.toggle("hidden");
                    imgArray = [];
                    alert("Tryck inte på samma!");
                    return;
                }
                
                // Skapa jämförelse-objekt
                if (imgArray.length == 2){
                    test = imgArray[1].getAttribute("src");
                    img.classList.toggle("hidden");
                }
                
                // Samma src code? Bilderna stämmer
                if (imgArray[0].getAttribute("src") == test){
                    img.className = "visible";
                    imgArray = [];
                    counter++;
                    if (counter == Memory.array.length / 2){
                        alert("Du klarade spelet! Nu får du en ny omgång att lösa!");
                        location.reload(true);
                    }
                    return;
                }

                // Standard
                if (imgArray.length == 1){
                    img.classList.toggle("hidden");
                }
                else 
                {
                    setTimeout(function(){ 
                    imgArray[0].classList.toggle("hidden");
                    imgArray[1].classList.toggle("hidden");
                    imgArray = []; }, 1000);
                }
            });
        });           
    }
};
window.onload = Memory.init;