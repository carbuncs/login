function registrar(){
    console.log('Diste un click')


// conseguir el valor que esta dentro de  el caudro ingrese correo y email
    var email = document.getElementById('correo').value;
    var contrasena = document.getElementById('contrasena').value;

    

    firebase.auth().createUserWithEmailAndPassword(email,contrasena).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
  
        console.log(email)
        console.log(contrasena)
  
        // ...
      });

     

}






service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if request.auth!=null;
    }
  }
}
