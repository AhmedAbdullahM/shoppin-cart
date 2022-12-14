function getPin(){

    const pin=generatePin();
    const pinString= pin+'';
    if(pinString.length === 4){
        return pin;
    }
    else{
        
        return getPin();
    }

}


function generatePin(){

    const random=Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){


   const pin=getPin();
//    display
    const displayPin=document.getElementById('display-pin');
    displayPin.value=pin;
})

document.getElementById('calculator').addEventListener('click', function(event){

    const number=event.target.innerText;
    const typeNumberField=document.getElementById('typed-numbers');
    const previousTypeNumber= typeNumberField.value;
    if(isNaN(number)){

        if(number === 'C'){
            typeNumberField.value='';
        }
        else if(number ==='<'){
            const digits=previousTypeNumber.split('');
            digits.pop();
            const remainingDigits=digits.join('');
            typeNumberField.value=remainingDigits;
        }
    }
    else{

        
       
       const newTypeNumber=previousTypeNumber+number;
        typeNumberField.value=newTypeNumber;
    }
    
})

document.getElementById('verify-pin').addEventListener('click',function (){

    const displayInputField=document.getElementById('display-pin');
 const currentPin=   displayInputField.value;



 const typeNumberField=document.getElementById('typed-numbers');
 const typedNumber=typeNumberField.value;
 const pinSuccess=document.getElementById('pin-success');
 const pinFailure=document.getElementById('pin-failure');
  if(typedNumber === currentPin){
    
    pinSuccess.style.display='block';
    pinFailure.style.display='none';
  }
   else{
    
    pinFailure.style.display='block';
    pinSuccess.style.display='none';
    
   }
})