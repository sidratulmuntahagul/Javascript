var b= new Date();
document.write(b);
document.write("<br>")
var a= new Date();
document.write(a.toDateString());
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<br>")
document.write("<hr>")
function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
function myfunction() {
  var inpObj=document.getElementById("class")
  if (!inpObj.checkValidity()) {
    document.getElementById("demo").innerHTML=inpObj.validationMessage;
  } else{
    document.getElementById("demo").innerHTML="Input Ok";
  }
}
  window.alert("Assalam u alaikum");
  function newDoc() {
    window.location.assign("https://www.w3schools.com/html/default.asp")
  }
  function goForward() {
    window.history.forward()
  }
  function myfunction() {
    alert("Don't do this!");
  }
  function myfunction() {
    var txt;
    var person=prompt("Please enter you name:","sidra");
    if (person==null||person=="") {
      txt="user cancelled the prompt.";
    }
    else{
      txt="Assalam ua laikum"
       + person +"! How are you today?";
    }
    document.getElementById("non").innerHTML=txt;
  }