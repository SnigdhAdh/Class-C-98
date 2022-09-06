var speechRecognition=window.webkitSpeechRecognition;
var recognition=new speechRecognition();

function start(){
   document.getElementById("textbox").innerHTML="";
   recognition.start();

}

recognition.onresult=function(event){
    console.log(event);
    
}