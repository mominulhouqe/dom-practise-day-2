/* 
document.getElementById('delet-confrim').addEventListener('keyup' , function(event){
    const text = event.target.value;
   const deletedButton = document.getElementById('btn-delete');
   if(text === 'delete'){
    deletedButton.removeAttribute('disabled');
   }
   else{
    deletedButton.setAttribute('disabled' , true);
   }

})

document.getElementById('btn-delete').addEventListener('click' , function(){
   
    const hideMe = document.getElementById('hide');
    hideMe.style.display = 'none';
})

 */


    document.getElementById('delet-confrim').addEventListener('keyup', function(event){
        const text = event.target.value
        const deletedButton = document.getElementById('btn-delete');
        if(text === 'delete'){
            deletedButton.removeAttribute('disabled');
        }
        else{
            deletedButton.setAttribute('disabled', true);
        }
    })
document.getElementById('btn-delete').addEventListener('click',  function(){
    const hideMe = document.getElementById('hide');
    hideMe.style.display = 'none';
})