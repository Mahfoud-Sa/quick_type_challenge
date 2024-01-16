counter=0;
errorCounter=0;
function myfunction(){
    var text=document.getElementById('text').innerHTML;
    var currentChar=text.charAt(counter);
    var userInput=document.getElementById('value').value.slice(-1);
    
    //var helpText=document.getElementById('Demo').innerHTML=document.getElementById('Demo').innerHTML+currentChar;
    var mute=false;
    var checkbox=document.getElementById('mute');
   //alert(currentChar);
   //alert(userInput);
   // alert(text);
    if(counter==text.length){

        alert((text.length/5)/count);
        location.reload()
       // document.ref
    }
//      checkbox.addEventListener('change',function(){
//           if(this.checkbox){
//  mute=false
//           }else{
//            mute=true
//           }
//         })
   // alert(currentChar);
   // alert(userInput);
    if(currentChar!==userInput){
        errorCounter+=1;
        if(
          mute
        )
       { var snd = new Audio('./assets/error_sound.wav');
        snd.play();
       }
       
       
    }else{
      document.getElementById('Demo').innerHTML=document.getElementById('Demo').innerHTML+currentChar;
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
  }
}, 1000);
