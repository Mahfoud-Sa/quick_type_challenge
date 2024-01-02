counter=0;
errorCounter=0;
function myfunction(){
    var text=document.getElementById('text').innerHTML;
    var currentChar=text.charAt(counter);
    var userInput=document.getElementById('value').value.slice(-1);
    var helpText=document.getElementById('Demo').innerHTML=document.getElementById('Demo').innerHTML+currentChar;
   //alert(currentChar);
   //alert(userInput);
   // alert(text);
    if(counter==text.length){

        alert((text.length/5)/count);
        location.reload()
       // document.ref
    }
    
   // alert(currentChar);
   // alert(userInput);
    if(currentChar!==userInput){
        errorCounter+=1;
        var snd = new Audio('/assets/error_sound.wav');
        snd.play();
    }else{
        counter+=1;
    }
    
    document.getElementById('score').innerHTML=errorCounter;
    
}
count=0;
const timer = setInterval(function() {
  count++;
  document.getElementById('timer').innerHTML=count;
  console.log(count);
  if (count === 0) {
    clearInterval(timer);
    console.log("Time's up!");
  }
}, 1000);