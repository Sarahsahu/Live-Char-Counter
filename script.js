const textArea=document.querySelector('.textarea');
const totalChar=document.querySelector('.total-char')
const remainingChar=document.querySelector('.remaining-char')


textArea.addEventListener('keyup',()=>{
    updateCounter();
    degradeCounter();
})

function updateCounter()
{
    totalChar.innerText=textArea.value.length;
}
function degradeCounter()
{
    remainingChar.innerText=textArea.getAttribute("maxLength")-textArea.value.length;
}