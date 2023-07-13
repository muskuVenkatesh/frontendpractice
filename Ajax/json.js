function fetchrandomdogImage(){
//     var  xhrRequest = new XMLHttpRequest();
//     xhrRequest.onload = function(){
//         console.log(xhrRequest.response);
//         var responseJSON = JSON.parse(xhrRequest,response);
//         var imageurl = response.JSON.message;
//         $('dog-image').attr('src',imageurl);
//     };
//     xhrRequest.open('get','https://dog.ceo/api/breeds/image/random',true)
//     xhrRequest.send();
// }
// $("fetch-image").click(fetchrandomdogImage);

// #2nd method ajax method

// $.ajax({
//     url:'https://dog.ceo/api/breeds/image/random',
//     method:'GET',
//     success: function(data){{
// 
//    var imageurl = data.message;
//        $('dog-image').attr('src',imageurl);

//     }
// Jquery Method
// $.get('https://dog.ceo/api/breeds/image/random',function(data){
//     var imageurl = data.message;
//     $('dog-image').attr('src',imageurl);

// }).fail(function(xhr,textStatus,errorThrown){
//     console.log('Request Failed')

// });

}
$("fetch-image").click(fetchrandomdogImage);