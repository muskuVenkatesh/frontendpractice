// var box=document.getElementById('box');
// box.addEventListener('mouseover',function(){
//     console.log("mouseover")
// });

//     box.addEventListener('mouseout',function(){
//         console.log("mouseout")
// });
// // function satHello();
// var searchInput=document.getElementById('search');
// searchInput.addEventListener('keypress',function(){
//     console.log("key pressed")

// });
// var button = document.getElementById('submit-button');
// button.onmouseenter = function(event) {
// console.log("Mouse entered element - ", event.target);
// };

var clicker=document.getElementById('inner');
clicker.addEventListener('click',function(event){
    console.log('mouse is entered');
    event.stopPropagation();
   

});
var OUTERDIV=document.getElementById('outer');
clicker.addEventListener('click',function(){
    console.log('mouse is get over');

});
document.addEventListener('click',function(){
    console.log('document is enterred');

});