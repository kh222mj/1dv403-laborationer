"use strict";

var Memory = {
    
    array : [],
    
    init : function() {
        var cols = 4;
        var rows = 4;
        var random = new RandomGenerator.getPictureArray(cols,rows);
        Memory.array = random;
        console.log(Memory.array);
    }
    
};
window.onload = Memory.init;