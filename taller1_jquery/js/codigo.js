//===== funciones ejercicio 1========

$(document).on('click', '.rojo', function(e){
	$('.section1').css('background','red');
});

$(document).on('click', '.verde', function(e){
	$('.section1').css('background','green');
});

$(document).on('click', '.azul', function(e){
	$('.section1').css('background','blue');
});

$(document).on('click', '.amarillo', function(e){
	$('.section1').css('background','yellow');
});

$(document).on('click', '.rosado', function(e){
	$('.section1').css('background','pink');
});

$(document).on('click', '.blanco', function(e){
	$('.section1').css('background','white');
});

//===================================

//===== funciones ejercicio 2========

$(document).on('click', '.ejecutar', function(e){
	var label=$('input[name=label]').val();
    var select=$('select[name="elemeneto"]').val();
    var imagen;
    switch (select) 
    { 
		case '1': 
			imagen="imagenes/img.jpg";
			break;
		case '2': 
			imagen="imagenes/select.jpg";
			break;
		case '3': 
			imagen="imagenes/div.jpg";
			break;		
	}

	$('.elementos_ingresados').append(" <div class='contenedor_elemento'>\n\ <label>"+label+"</label>\n\ <div class='elemt_ingr'>\n\ <img src='"+imagen+"' class='img_ingr'>\n\ </div>\n\ </div> ");

});

//==========================================

//===== funciones ejercicio 3========

var time=$('input[name=tiempo]').val()*1000;


$(document).on('click', '.leer_num', function(e){
time=$('input[name=tiempo]').val()*1000;
});

$(document).on('click', '#show', function(e){
	$('.circulo').show();
});

$(document).on('click', '#hide', function(e){
	$('.circulo').hide();
});

$(document).on('click', '#toggle', function(e){
	$('.circulo').toggle();
});

  // Con tiempo
$(document).on('click', '#showSpeed', function(e){
    // dura el tiempo indicado por el usuario
	$('.circulo').show(time);
});  
  
$(document).on('click', '#hideSpeed', function(e){
    // dura el tiempo indicado por el usuario
	$('.circulo').hide(time);
});  
 
$(document).on('click', '#toggleSpeed', function(e){
    // dura el tiempo indicado por el usuario
	$('.circulo').toggle(time);
}); 

$(document).on('click', '#fadein', function(e){
    // dura el tiempo indicado por el usuario
	$('.circulo').fadeIn(time);
}); 

$(document).on('click', '#fadeout', function(e){
    // dura el tiempo indicado por el usuario
	$('.circulo').fadeOut(time);
}); 

$(document).on('click', '#fadeto', function(e){
    // dura el tiempo indicado por el usuario
	$('.circulo').fadeTo(time, 0.3);
});  
  
$(document).on('click', '#fadeto1', function(e){
    // dura el tiempo indicado por el usuario
	$('.circulo').fadeTo(time, 1.0);
});

$(document).on('click', '#hacia_der', function(e){
    // dura el tiempo indicado por el usuario
	$('.circulo').animate({width: "500px"}, time, "swing");
});


$(document).on('click', '#hacia_izq', function(e){
    // dura el tiempo indicado por el usuario
	$('.circulo').animate({width: "50px"}, time, "swing");
});


$(document).on('click', '#hacia_abajo', function(e){
    // dura el tiempo indicado por el usuario
	$('.circulo').animate({height: "500px"}, time, "swing");
});


$(document).on('click', '#hacia_arriba', function(e){
    // dura el tiempo indicado por el usuario
	$('.circulo').animate({height: "50px"}, time, "swing");
});
    

$(document).on('click', '#der_y_abajo', function(e){
    // dura el tiempo indicado por el usuario
	$('.circulo').animate({height: "500px"}, time, "swing");
	$('.circulo').animate({width: "500px"}, time, "swing");
});

$(document).on('click', '#izq_y_arriba', function(e){
    // dura el tiempo indicado por el usuario
	$('.circulo').animate({height: "50px"}, time, "swing");
	$('.circulo').animate({width: "50px"}, time, "swing");
});

$(document).on('click', '#stop', function(e){
    // dura el tiempo indicado por el usuario
	$('.circulo').stop();
});

//===================================================

//===== funciones ejercicio 4========

var select=$('select[name="clases_option"]').val();

$(document).on('click', '.ejecutar_clase', function(e){
var select=$('select[name="clases_option"]').val();
	if($( "#rad" ).prop( "checked")==true){
		$('#obj_para_clases').addClass(select);
	}else{
		$('#obj_para_clases').removeClass(select);
	}
});

//===========================================

//========= funciones ejercicio 5 ===========

$(document).on('change', 'input[name=radio_elem]', function(e){
var opcion=$('input[name=radio_elem]').prop( "checked");
	if(opcion == true)
	{
		$('#elemento_segun_eleccion_1').css('display', 'none');
		$('#elemento_segun_eleccion_2').css('display', 'inline');
	}
	else
	{
		$('#elemento_segun_eleccion_2').css('display', 'none');
		$('#elemento_segun_eleccion_1').css('display', 'inline');
	}
});

//===========================================

//=============funciones ejercicio 6=========
$('.valle').hide();
$('.quindio').hide();
$('.antioquia').hide();

$(document).on('change', '#departamentos', function(e){
var option=$('#departamentos').val();
	switch(option){
		case "0":
			$('.valle').hide();
			$('.quindio').hide();
			$('.antioquia').hide();
			break;
		case "1":
			$('.valle').show();
			$('.quindio').hide();
			$('.antioquia').hide();
			break;
		case "2":
			$('.valle').hide();
			$('.quindio').show();
			$('.antioquia').hide();
			break;
		case "3":
			$('.valle').hide();
			$('.quindio').hide();
			$('.antioquia').show();
			break;
	}
});

//=================================================

//========= funciones ejercicio 7 =================

function validar(){
	
	//Almacenamos los valores
	nombre=$('#nombre').val();
	correo=$('#correo').val();
	telefono=$('#telefono').val();
	
	//validacion input nombre
	if (nombre==''){ // ssi nombre es  vacio
		$('#errores_nombre').html("");
		$('#respuesta_nombre').removeClass().addClass('inicio');
		$('#errores_nombre').append("<span class='error'>Debe ingresar un nombre</span >");
	}
	else { // si hay valores en nombre
		$('#respuesta_nombre').removeClass().addClass('ok');
		$('#errores_nombre').html("");
	}

	//validadcion input email
	if (correo==''){ // input correo no tiene valores
		$('#errores_email').html("");
		$('#respuesta_correo').removeClass().addClass('inicio');
		$('#errores_email').append("<span class='error'>Debe ingresar un correo</span >");
	}
	else if(correo.indexOf("@",0)== -1) { // si no tiene a comercial
		$('#errores_email').html("");
		$('#respuesta_correo').removeClass().addClass('inicio');
		$('#errores_email').append("<span class='error'>Debe tener la estructura ___@__.__</span >");
	}else if(correo.indexOf('.', 0) == -1){
		$('#errores_email').html("");
		$('#respuesta_correo').removeClass().addClass('inicio');
		$('#errores_email').append("<span class='error'>Debe tener la estructura ___@__.__</span >");
	}else{
		$('#errores_email').html("");
		$('#respuesta_correo').removeClass().addClass('ok');
	}

	// validacion input telefono

	if (telefono==""){ // input correo no tiene valores
		$('#errores_telefono').html("");
		$('#respuesta_telefono').removeClass().addClass('inicio');
		$('#errores_telefono').append("<span class='error'>El teléfono es requerido</span >");
	}
	else if(isNaN(telefono)) { // si no tiene a comercial
		$('#errores_telefono').html("");
		$('#respuesta_telefono').removeClass().addClass('inicio');
		$('#errores_telefono').append("<span class='error'>El teléfono solo debe contener números</span >");
	}else if(telefono.length < 7 && telefono.length>10){
		$('#errores_telefono').html("");
		$('#respuesta_telefono').removeClass().addClass('inicio');
		$('#errores_telefono').append("<span class='error'>El teléfono debe contener entre 7 y 10 caracteres </span >");
	}else{
		$('#respuesta_telefono').removeClass().addClass('ok');
		$('#errores_telefono').html("");
	}


}

//===========================================

//========== funciones ejercicio 10==========
$(document).on('click', '.boton_calc', function(e){
    btns_especiales = $(this).val();
    atual = $("#resultado").val();
    if(btns_especiales=="C"){
        $("#resultado").val("");
    }else{
        if(btns_especiales=="="){
            $("#resultado").val(eval(atual));
        }else{
            $("#resultado").val(atual + btns_especiales);
        }
    }
})


 