/* 
document.getElementById('btn-event').addEventListener('mouseenter', function(){
    console.log('You clicked me ');
})
document.getElementById('text-field').addEventListener('focus', function(){
    console.log('you fucus men');
})
document.getElementById('text-field').addEventListener('blur', function(){
    console.log('you blure med');
}) 

*/

// document.getElementById('btn-event').addEventListener('mouseout', function(){
//     console.log('You oout me');
// })

document
  .getElementById("text-field")
  .addEventListener("keyup", function (event) {
    console.log(event.target.value);
  });
