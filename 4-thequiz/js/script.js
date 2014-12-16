var nextURL = "";
var nextQuest = "http://vhost3.lnu.se:20080/question/1";
var count = 0;
var quest = 0;
var tries = [];
var wrong = 0;

window.onload = function(){
    
    var createP = function(str){
          var p = document.createElement("p");
          var textnode = document.createTextNode(str);
          p.appendChild(textnode);
          document.getElementById("quest").appendChild(p);
    };
    
    var getQuest = function(){
        
        quest++;
        document.getElementById("svaret").value = "";
        var xhr = new XMLHttpRequest();
        
        xhr.onreadystatechange = function(){
          
          if(xhr.readyState === 4 && xhr.status === 200){
              var req = JSON.parse(xhr.responseText);
              createP(req.question);
              nextURL = req.nextURL;
            }
          };
        xhr.open("GET", nextQuest, true);
        xhr.send(null);
        };
        getQuest();
    
    document.getElementById("send").addEventListener("click", function(){
       count++;
       var xhr = new XMLHttpRequest();
       xhr.onreadystatechange = function(){
       if(xhr.readyState === 4 && xhr.status === 200){
            var req = JSON.parse(xhr.responseText);
            nextQuest = req.nextURL;
            createP("Rätt svar!");
            var obj = "På fråga " + quest + " hade du " + count + " antal försök!";
            tries.push(obj);
            count = 0;
            getQuest();
        }
       if(xhr.status === 400){
           wrong++;
           if(wrong == 3){
               wrong = 0;
               createP("Fel svar, försök igen!");
               document.getElementById("svaret").value = "";
           }
       }    
        
       if(quest == 6){
           createP("Du klarade alla frågor!!");
           for(var i = 0; i < tries.length; i++){
               createP(tries[i]);
           }
       }    
        
       };
       xhr.open("POST", nextURL, true);
       xhr.setRequestHeader("Content-Type", "application/json");
       
       var svar = document.getElementById("svaret");
       var svaret = svar.value;
       
       if(svaret.length === 0){
           alert("Skriv in ditt svar i textfältet");
           return;
       }
       
       var test = {
           "answer": svaret
       };
       xhr.send(JSON.stringify(test));
       
    });
};