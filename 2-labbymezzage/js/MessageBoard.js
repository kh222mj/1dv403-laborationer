"use strict";
var MessageBoard = {
    
    messages: [],
    
    init: function() {
        var mess = new Message("testmeddelande", new Date());
        MessageBoard.messages.push(mess);
        alert(MessageBoard.messages[0].getText());
        var mess1 = new Message("Andra meddelandet", new Date());
        MessageBoard.messages.push(mess1);
        alert(MessageBoard.messages[1].getText());
    }
};
window.onload = MessageBoard.init;