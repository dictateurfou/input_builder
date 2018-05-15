var titre = 1;
var action = 1;
var resource = 1;
var arg = 1;
var result = [];
var multi = false;
var tab = [];
var verifContent;




function addClick(){
	    $( "#submit" ).click(function(event) {
		event.preventDefault();

		if(multi == false){
		 	nombre = $('#nombre').val();
		 	if (Number(nombre) > 0) {
		 		$('body').hide();
			 	$.post('http://input_builder/montant', JSON.stringify({
		                arg : arg,
		                nombre :nombre,
		                resource : resource,
		                action : action,
		        }));

		        $.post('http://input_builder/close', JSON.stringify({
		        }));
		 	}
	 	}
	 	else{

	 		var i = 0;
	 		result = {};
	 		verifContent = true;
	 		while(tab.length > i){
	 			var valeur = $('#' + tab[i].name + '').val();
	 			console.log(valeur);
	 			result[tab[i].name] =  valeur;
	 			i++;
	 			if(valeur.length < 1){
	 				verifContent = false;
	 			}
	 		}

	 		if(verifContent == true){
	 		$('body').hide();
		 		$.post('http://input_builder/multiple', JSON.stringify({
		                arg : arg,
		                result : result,
		                action : action,
			    }));

		 		$.post('http://input_builder/close', JSON.stringify({
			    }));
		 	}

	 	}
	});
}

$(function(){

    window.addEventListener("message", function(event) {
		var mess = event.data;
		if(typeof mess.titre !== 'undefined' && typeof mess.type == 'undefined'){
			multi = false;
			$('body').show();
			action = mess.action;
			resource = mess.resource;
			arg = mess.arg;
			$("#login-form").html("<h1 id='titre'>" + mess.titre + "</h1><input id='nombre' step='1' min='0' type='number' ><br><button id='submit' type='submit'>Valider</button>");
			addClick();
		}

		if(typeof mess.type !== 'undefined'){
			if(mess.type == "multiple"){
				$('body').show();
				tab = mess.tab;
				arg = mess.arg;
				action = mess.action;
				multi = true;
				$("#login-form").html("<h1 id='titre'>" + mess.titre + "</h1>");
				var i = 0;
				while(i < tab.length){
					if(tab[i].type == "number"){
						$("#login-form").append("<input id='" + tab[i].name + "'  placeholder='" + tab[i].name + "' step='1' min='1' type='number' ><br>");
					}
					else if(tab[i].type == "text"){
						$("#login-form").append("<input id='" + tab[i].name + "' placeholder='" + tab[i].name + "' type='text'><br>");
					}
					else if(tab[i].type == "textarea"){
						$("#login-form").append("<textarea id='" + tab[i].name + "' name='textarea'rows='10' cols='40'>" + tab[i].name + "</textarea>");
					}
					i++;
				}
				$("#login-form").append("<button id='submit' type='submit'>Valider</button>");
				addClick();
			}
		}

    });


document.onkeydown = function(data) {


    if(data.which == 13){//entrer
    	data.preventDefault();
    	if(multi == false){
		 	nombre = $('#nombre').val();
		 	if (Number(nombre) > 0) {
		 		$('body').hide();
			 	$.post('http://input_builder/montant', JSON.stringify({
		                arg : arg,
		                nombre :nombre,
		                resource : resource,
		                action : action,
		        }));

		        $.post('http://input_builder/close', JSON.stringify({
		        }));
		 	}
	 	}
	 	else{

	 		var i = 0;
	 		result = {};
	 		verifContent = true;
	 		while(tab.length > i){
	 			var valeur = $('#' + tab[i].name + '').val();
	 			console.log(valeur);
	 			result[tab[i].name] =  valeur;
	 			i++;
	 			if(valeur.length < 1){
	 				verifContent = false;
	 			}
	 		}

	 		if(verifContent == true){
	 			$('body').hide();
		 		$.post('http://input_builder/multiple', JSON.stringify({
		                arg : arg,
		                result : result,
		                action : action,
			    }));

		 		$.post('http://input_builder/close', JSON.stringify({
			    }));
		 	}

	 	}  
    }

};


});