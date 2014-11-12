"use strict";

window.onload = function(){
	
			var birthday = function(date){
			var month, day;
			var regPat = /[0-9]{4}\-[0-9]{2}\-[0-9]{2}/;
			
		try
		{
			if(regPat.test(date))
			{
				if(date.charAt(5) === 0)
				{
					month = date.charAt(6);
				}
				else
				{
					month = date.charAt(5) + date.charAt(6) - 1;	
				}
				if(date.charAt(8) === 0)
				{
					day = date.charAt(9);
				}
				else
				{
					day = date.charAt(8) + date.charAt(9);
				}
				var birthday = new Date();
				birthday.setDate(day);
				birthday.setMonth(month);
				
				var currentdate = new Date();
				if(currentdate.getTime() > birthday.getTime()) 
				{
			    	birthday.setFullYear(birthday.getFullYear() + 1);
				} 
				birthday = birthday.getTime();
				
				currentdate = currentdate.getTime();
				var theDate = birthday - currentdate;
				theDate = Math.floor(theDate/(1000 * 60 * 60 * 24));
			
				return theDate;
			}
			else 
			{
				throw new Error("Formateringen är inte korrekt!");
			}
		}
		catch(error)
		{
			alert(error);
		}
	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};