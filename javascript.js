counter=0;
errorCounter=0;
function myfunction(){
    var currentChar=document.getElementById('text').innerHTML.charAt(counter);
    var userInput=document.getElementById('value').value.charAt(counter);
   // alert(currentChar);
   // alert(userInput);
    if(currentChar!==userInput){
        errorCounter+=1;
    }
    counter+=1;
    document.getElementById('score').innerHTML=errorCounter;
    document.getElementById('Demo').innerHTML=document.getElementById('value').value;
}