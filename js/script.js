var username ="";

	function send_message(message){
		
		var prevState= $("#container").html();
		
		
		if (prevState.length >1){
			prevState= prevState + "<br>";
		}
		$("#container").html(prevState + "<span class='current_message'>" + "<span class='bot'>Chatbot: </span>" + message + "</span>");
		$(".current_message").hide();
		$(".current_message").delay(500).fadeIn();
		$(".current_message").removeClass("current_message");
	
	}
	
	function get_username(){
	
		send_message("Hello, what is your Name?");
	
	}
	
	function ai(message){
		
		if (username.length<1){
			username = message;
			send_message("Nice to meet you " + username + ",how are you doing?");
		}
		if ((message.indexOf("how are you")>=0)|| (message.indexOf("and you")>=0)){
			send_message("Thanks " + username + " ,I am good ");
		}
		
		if ((message.indexOf("I am sick")>=0)|| (message.indexOf("not feeling fine")>=0)|| (message.indexOf("am ill")>=0)|| (message.indexOf("not well")>=0)){
			send_message("Sorry " + username + " ,may I know your symptoms ");
		}
		
		if ((message.indexOf("headache,fever,stomach pain,diarrhoea")>=0)|| (message.indexOf("headache,weakness,fatigue,fever")>=0) || (message.indexOf("headache,weakness,fever")>=0)){
			send_message("I feel your pain " + username + " , from the symptoms mentioned you most likely have TYPHOID. Kindly Signup to get in contact with a doctor for further diagnosis. ");
		}
		
		if ((message.indexOf("headache,fever,chills,sweating")>=0)|| (message.indexOf("headache,chills,fatigue")>=0) || (message.indexOf("headache,chills,vomiting")>=0) || (message.indexOf("fever,chills,nausea")>=0)){
			send_message("I feel your pain " + username + " , from the symptoms mentioned you most likely have MALARIA. Kindly Signup to get in contact with a doctor for further diagnosis. ");
		}
		
		if ((message.indexOf("fever,abdominal pain,watery stool")>=0)|| (message.indexOf("fever,nausea,blood in stool")>=0) || (message.indexOf("abdominal cramps,watery faeces")>=0) || (message.indexOf("watery faeces,fever,nausea")>=0)){
			send_message("I feel your pain " + username + " , from the symptoms mentioned you most likely have DIARRHEA. Kindly Signup to get in contact with a doctor for further diagnosis. ");
		}
		
		if ((message.indexOf("fever,dry cough,tiredness")>=0)|| (message.indexOf("fever,cough,fatigue")>=0) || (message.indexOf("Fever,aches,sore throat")>=0) || (message.indexOf("fever,cough,tiredness")>=0)){
			send_message("I feel your pain " + username + " , from the symptoms mentioned you most likely have COVID-19. Kindly Signup to get in contact with a doctor for further diagnosis. ");
		}
		
		if ((message.indexOf("time")>=0) || (message.indexOf("hour")>=0)){
			var date= new Date();
			var h = date.getHours();
			var m = date.getMinutes();
			send_message("Current time is: "+h+":"+m);
		}
		
	}

$(function(){


	get_username();
	$("#textbox").keypress(function(event){
		if(event.which==13){
			if( $("#enter").prop("checked")){
			
			$("#send").click();
			event.preventDefault();
			
			}
		
		
		}
	
	
	
	});
	
	$("#send").click(function(){
	
		var newMessage = $("#textbox").val();
		
		var username = "<span class='username'>You: </span>";
		
		var prevState= $("#container").html();
		
		
		if (prevState.length >1){
			prevState= prevState + "<br>";
		
		}
		$("#container").html(prevState + username + newMessage);
		$("#container").scrollTop($("#container").prop("scrollHeight"));
		$("#textbox").val("");
		ai(newMessage);
	});

});
