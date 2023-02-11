function make() {
  document.body.style.background = "blue";
}

const redButton = document.getElementById("make-red");

redButton.addEventListener("click", makeRed);

function makeRed() {
  document.body.style.background = "red";
}


const makeGreen = document.getElementById('makeGreen');

makeGreen.addEventListener('click', function makeGreen(){
    document.body.style.background = 'green';
});

// document.getElementById('makeYellow' , function(){
//     document.body.style.background
// })

const makeYellow = document.getElementById('makeYellow').addEventListener('click', function(){
    document.body.style.background = 'yellow';
});