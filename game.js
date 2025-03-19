var submitbutton=document.getElementById("submit");
var live=document.getElementById("livesno");
var msg=document.getElementById("message");
 var randomNumber =Math.round(Math.random()*100);
 var lives =5;
 var message;
 submitbutton.onclick =() =>{
   var userInput =document.getElementById("number").value;
   lives--;
   if(lives == 0)
   {
    location.href="./loose.html";
   }
   else if(randomNumber<userInput)
   {
    message="oops you are number is high";
   }
   else if(randomNumber>userInput)
   {
    message="oops you are number is small";
   }
   else if(randomNumber==userInput)
   {
    location.href="./win.html";
   }
   msg.style.display="inherit";
   msg.innerHTML=message;
   live.innerHTML=lives;
 }