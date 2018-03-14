var gebruikersnamen = ["root", "Deriz", "Naomi"];
var wachtwoorden = [];
wachtwoorden["root"] = "root";
wachtwoorden["Deriz"] = "Deriz";
wachtwoorden["Naomi"] = "Kweekel1"

// Below function Executes on click of login button.
function validate(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  var a = gebruikersnamen.indexOf(username)
  console.log(a);

  if ( a !== "-1" && password == wachtwoorden[username]){
  console.log("Login successfully");
  alert("Login successfull!");
  window.location.replace("miniProxy.php")
  return false;
} else {
  alert("Login unsuccesfull!")
  location.reload();
  }
}
