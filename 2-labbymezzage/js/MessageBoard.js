"use strict";
var MessageBoard = {
    
    messages: [],
    
    init: function() {
    }
};
window.onload = MessageBoard.init;

var klick = function() {
    
    var myText = document.getElementById("myText");
    var text = myText.value;
    var mess = new Message(text, new Date());
    
    MessageBoard.messages.push(mess);
    
    var i = MessageBoard.messages.length - 1;
    renderMessage(i);
    i++;
    
    document.getElementById("counter").innerHTML = "Antal Meddelanden: " + i;
};

var renderMessage = function(messageID) {
    
    var di = document.createElement("article");
    var p = document.createElement("p");
    p.innerHTML = MessageBoard.messages[messageID].getHTMLText();                                                                                           
    di.appendChild(p);
    
    var img = document.createElement("img");
    img.src = "pics/remove.png";
    img.id = "imgRemove";
    img.onclick = function() {
        removeMessage(messageID);        
    };
    
    var date = document.createElement("img");
    date.src = "pics/clock.png";
    date.id = "imgClock";
    date.onclick = function() {
        alert("Inlägget skapades den " + MessageBoard.messages[messageID].getDateText());
    };
    
    var div = document.getElementById("the_div");
    div.appendChild(date);
    div.appendChild(img);
    div.appendChild(di);
};

var renderMessages = function() {
    
    document.getElementById("the_div").innerHTML = "";
    
    for(var i = 0; i < MessageBoard.messages.length; i++){
        renderMessage(i);
    }
};

var removeMessage = function(messageID){
    
    MessageBoard.messages.splice(messageID, 1);
    
    var i = MessageBoard.messages.length;
    document.getElementById("counter").innerHTML = "Antal Meddelanden: " + i;
    
    renderMessages();
};