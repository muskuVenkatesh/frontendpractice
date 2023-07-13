function displayImage(data){
    //creation of image tag//
    $('<img',{
        src:data.url
    }).appendTo('#image-container')

}
$.ajax({
    url:'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY',
    method:'GET',
    success:displayImage
})