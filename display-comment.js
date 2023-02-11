
/* 
// Step --> 1 > add event listener to the post button
document.getElementById('post-btn').addEventListener('click', function(){
  
  // step -2;
    const CommentBox = document.getElementById('new-comment');
     const newComment = CommentBox.value;

    //  console.log(newComment);

// step-3 set the comment inside the cmment
     const addedComment = document.getElementById('addedTagg');
    const p = document.createElement('p');

    p.innerText = newComment;
    addedComment.appendChild(p);

    // step -4
    CommentBox.value = '';


})
 */

/* 

document.getElementById('post-btn').addEventListener('click', function(){
  const textArea = document.getElementById('new-comment');
  const textValue = textArea.value;
  const addedTagg = document.getElementById('addedTagg');
  const p = document.createElement('p');
  p.innerText = textValue;
  addedTagg.appendChild(p);
  textArea.value = '';
})


 */


// step-->1 : added addEvenListener on post button

document.getElementById('post-btn').addEventListener('click' , function(){
    // step-->2 : select textArea value
    const textArea = document.getElementById('new-comment');
    const textValue = textArea.value;
    // step ->3 : Added your comment on div
    const addedValue = document.getElementById('addedTagg');
     const p = document.createElement('p');
    p.innerText = textValue;
     addedValue.appendChild(p);
     textArea.value = '';
})














