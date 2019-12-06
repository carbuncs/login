function registrar(){
    console.log('Diste un click')
    var email= document.getElementById('correo').value;
    var contrasena= document.getElementById('pass').value;
    

    firebase.auth().createUserWithEmailAndPassword(email, contrasena).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    console.log(errorCode);
    console.log(errorMessage);
    // ...
  });
}









