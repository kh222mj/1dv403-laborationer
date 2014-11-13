"use strict";

var makePerson = function(persArr){
    
    //Läser in object till arrayer
    var arrN = [];
    var arrA = [];
    for(var i = 0; i < persArr.length;)
    {
        arrN.push(persArr[i].name);
        i++;
    }
    
    for(var i = 0; i < persArr.length;)
    {
        arrA.push(persArr[i].age);
        i++;
    }
    // Formaterar namn
    arrN = arrN.sort(String.localeCompare);
    var names = arrN.join(", ");
    
    // Beräknar medelvärde
    var averageAge = arrA.reduce(function(a,b){ return a+b; }) / arrA.length;
    averageAge = Math.round(averageAge);
    
    // Sortering nummer
    arrA.sort(function(a, b){return a-b});
    
    var minAge = arrA[0];
    var maxAge = arrA[arrA.length - 1];
    
    // Returning
    var persNy = { minAge:minAge, maxAge:maxAge, averageAge:averageAge, names:names };
    
    return persNy;
}
