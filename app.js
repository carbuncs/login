function registrar(){
    console.log('Diste un click')


// conseguir el valor que esta dentro de  el caudro ingrese correo y email
    var email = document.getElementById('correo').value;
    var contrasena = document.getElementById('contrasena').value;

    console.log(email)
    console.log(contrasena)

    firebase.auth().createUserWithEmailAndPassword(email , contrasena).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });email-contrasena.html

      console.log(errorCode)
      console.log(errorMessage)

}