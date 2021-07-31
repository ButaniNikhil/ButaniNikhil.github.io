let login=  document.getElementById('login');
let register =   document.getElementById('register');
register.style.display = 'none';
function CreateAcc(){
  login.style.display = "none";
  register.style.display = "block";
  
}
function loginAcc(){
    login.style.display = "block";
    register.style.display = "none";
    
}


function signUp(){
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let password2 = document.getElementById('password2').value ;

  if(password === password2){
      firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
          console.log(userCredential);
          login.style.display = "block";
          register.style.display = "none";
      })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode,errorMessage);
    });
  }else{
    console.log("password must be same");
  }

}


function Login(){
  let email = document.getElementById('login_email').value;
  let password = document.getElementById('login_password').value;
  firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        login.style.display = "none";
        register.style.display = "none";
        window.location.replace("../Responsive-CV.html");
      })
      .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorMessage);
      });
  
}