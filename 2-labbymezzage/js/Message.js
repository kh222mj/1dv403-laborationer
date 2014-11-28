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
    var now = new Date();
    var day = now.getDate();
    var monthNu = now.getMonth();
    var monthNames = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];
    var month = monthNames[monthNu];
    var year = now.getFullYear();
    return day + "e" + " " + month + " " + year;
};

Message.prototype.getTimeText = function(){
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    
    if(hours < 10){
        hours = "0" + hours;
    }
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    return hours + ":" + minutes + ":" + seconds;
};

