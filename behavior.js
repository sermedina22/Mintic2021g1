document.addEventListener("DOMContentLoaded", function(event) {
    var registerElement = document.getElementById('Registerbutton');
    
    registerElement.addEventListener("click", function() {//botton clicked
        // code
        window.location.pathname = ('/registro.html');//cambio de pagina
       
    });
   
    var bodyElement = document.getElementById('tema');
    var configElement = document.getElementById('confbutton');
    
    configElement.addEventListener("click", function() {//cambiamos clase de la pagina
        if (bodyElement.className == "nocturno") {          
            bodyElement.className = "diurno"; lastteam="diurno";}//cambiamos el tema.
        else{bodyElement.className = "nocturno";lastteam="nocturno";}


    });

});
