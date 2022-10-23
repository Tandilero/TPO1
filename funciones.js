function validar(){
    
    var form = document.form;

    var mensajesError = [];

    if(fullname.value==0){
        mensajesError.push("nombre");
        /*form.fullname.value="";
        form.fullname.focus();
        return false;*/
    }

    if(email.value==0){
        mensajesError.push("correo");
        /*alert("El campo correo se encuentra vacío");
        form.email.value="";
        form.email.focus();
        return false;*/
    }
    
    if(phone.value==0){
        mensajesError.push("teléfono");
        /*form.phone.value="";
        form.phone.focus();
        return false;*/
    }

    if(affair.value==0){
        mensajesError.push("asunto");
        /*form.affair.value="";
        form.affair.focus();
        return false;*/
    }

    if(message.value==0){
        mensajesError.push("mensaje");
        /*form.message.value="";
        form.message.focus();
        return false;*/
    }
    
    //error.innerHTML = mensajesError.join(',');
    if(mensajesError.length==0){
        alert("El mensaje ha sido enviado con éxito!");
    }
    else if(mensajesError.length==1){
        alert("El campo "+mensajesError+" se encuentra vacío");
    }
    else {
        alert("Los campos "+mensajesError+" se encuentran vacíos");
    }
    form.submit();
}

function seleccionarMenu(){
    //console.log("está funcionando mi botón");
    var ancla = document.getElementsByClassName('nav-enlace');
    for(var i = 0; i < ancla.length; i++){
        ancla[i].classList.toggle('desaparece');
    }
}