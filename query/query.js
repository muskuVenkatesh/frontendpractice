// var para1 = document.getElementById("para1");
// para1.innerHTML="siri";
$('#para1').text('sushma')
// $('#para2').hide();
// $('#para1').css('color','blue');
// $('p').css('fontSize','50px');
$('p').css({
    color:"red",
    fontSize:"60px",
})
$('div').css({
    width:"100px",
    height:"100px",
    backgroundColor:"black"
    
})
// event handling
$('div').click(function(){
    var element = $(this);
    element.width(element.width()+ 10 + "px")
    // alert("here you go MotherFucker")
})
// another way to event handling
// $('div').on('click',function(){
//     alert("hello venkatesh")
// })
$('a').on('click',function(){
    event.preventDefault();
    alert("hello venkatesh")
})
