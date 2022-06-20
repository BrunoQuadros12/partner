(function(){

    console.log
    
    function limparCampos(){
      var nome = document.getElementById('nomeHome');
      var email = document.getElementById('emailHome');
      var msg = document.getElementById('mensagemHome');
      var tel = document.getElementById('telefoneHome');
      nome.value = '';
      email.value = '';
      msg.value = '';
      tel.value = ''
    }
   
    var myform = $("form#formularioHome");
    myform.submit(function(event){
        console.log('foi')
      event.preventDefault();

      // Change to your service ID, or keep using the default service
      var service_id = "default_service";
      var template_id = "homepartnership";

      myform.find("button").text("Enviando...");
      emailjs.sendForm(service_id,template_id,myform[0])
        .then(function(){ 
          alert("Enviado!");
           myform.find("button").text("Enviado");
           limparCampos()
        }, function(err) {
           alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
           myform.find("button").text("Send");
        });
      return false;
    });

  
})();