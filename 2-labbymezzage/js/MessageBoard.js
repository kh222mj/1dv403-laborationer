"use strict";

var MessageBoard = {
    
    messages: [],
    
    init : function() {
        document.getElementById("knapp").onclick = MessageBoard.klick;
        document.getElementById("myText").onkeypress = MessageBoard.keyPress;
    },
    
    klick : function() {
    
        var myText = document.getElementById("myText");
        var text = myText.value;
        var date = new Date();
        var mess = new Message(text, date);
        
        MessageBoard.messages.push(mess);
        
        var i = MessageBoard.messages.length - 1;
        MessageBoard.renderMessage(i);
        i++;
        
        document.getElementById("counter").innerHTML = "Antal Meddelanden: " + i;
        myText.value = "";
    },
    
    renderMessage : function(messageID) {
    
    var di = document.createElement("article");
    var p = document.createElement("p");
    p.innerHTML = MessageBoard.messages[messageID].getHTMLText();                                                                                           
    di.appendChild(p);
    
    var img = document.createElement("img");
    img.src = "pics/remove.png";
    img.id = "imgRemove";
    img.onclick = function() {
        MessageBoard.removeMessage(messageID);        
    };
    
    var date = document.createElement("img");
    date.src = "pics/clock.png";
    date.id = "imgClock";
    date.onclick = function() {
        alert("Inlägget skapades den " + MessageBoard.messages[messageID].getDateText());
    };
    
    var datum = document.createElement("p");
    datum.innerHTML = MessageBoard.messages[messageID].getTimeText();
    datum.id = "datumP";
    di.appendChild(datum);
    
    var div = document.getElementById("the_div");
    div.appendChild(img);
    div.appendChild(date);
    div.appendChild(di);
    
    },
    
    renderMessages : function() {
    
    document.getElementById("the_div").innerHTML = "";
    
    for(var i = 0; i < MessageBoard.messages.length; i++){
        MessageBoard.renderMessage(i);
        }
    
    },
    
    removeMessage : function(messageID){
    
    var r = confirm("Vill du verkligen radera meddelandet?");
    if(r === true){
        MessageBoard.messages.splice(messageID, 1);
        
        var i = MessageBoard.messages.length;
        document.getElementById("counter").innerHTML = "Antal Meddelanden: " + i;
        MessageBoard.renderMessages();
        }   
    },
    
    keyPress : function(e) {
    var keyCode = e.keyCode;
        if(e.shiftKey){
            return;
        }
        if(keyCode == 13){
            MessageBoard.klick();
            e.preventDefault();
        }
    }
};
window.onload = MessageBoard.init;









