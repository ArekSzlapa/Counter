//set initial count
let licznik=0;
const przycisk=document.querySelectorAll('.butts');
const display=document.querySelector('.number');

function rerender(){
    display.innerText=licznik;

    if (licznik>0){
        document.querySelector('.number').style.color = "#00C000";
   }
   else if (licznik===0){
    document.querySelector('.number').style.color = "#000000";
   }
   else{
    document.querySelector('.number').style.color = "#C00000";
   }
}
for (let i = 0; i < przycisk.length; i++) {
    przycisk[i].addEventListener("click",function(event){
        buttonClick(event.target.innerText);
      
    })
}

   function buttonClick(value){
       switch (value){
           case 'Decrease':
               licznik--;
               break;
            case 'Reset':
                   licznik=0;
                   break;
            case 'Increase':
                licznik ++;
                break;
       }
       
       rerender();
   }