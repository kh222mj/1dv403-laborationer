"use strict";

function Message(message, date){
    
    this.getText = function() {
        return message;
    };
    
    this.setText = function(text) {
        message = text;
    };
    
    this.getDate = function(){
        return date;
    };
    
    this.setDate = function(_date){
        date = _date;
    };
}

Message.prototype.toString = function() {
    return this.getText() + " (" + this.getDate() + ") ";
};

Message.prototype.getHTMLText = function() {
    var message = this.getText();
    return message.replace(/[\n\r]/g, "<br />");
};

Message.prototype.getDateText = function() {
    var date = new Date();
    return date;
};

