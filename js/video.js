

let vid1 = document.querySelector(".vid1");
let vid2 = document.querySelector(".vid2");
let vid3 = document.querySelector(".vid3");
let image1 = document.querySelector(".image1");
let image2 = document.querySelector(".image2");
let image3 = document.querySelector(".image3");


var iframe = document.getElementsByTagName("iframe"); 

function click() { 

    if(image3){
    iframe.pause(); 
    }
} 

    image1.addEventListener("click", function(){
        vid1.style.display= "block";
        vid2.style.display= "none";
        vid3.style.display= "none";
       

    });

    image2.addEventListener("click", function(){ 
        vid2.style.display= "block";
        vid1.style.display= "none";
        vid3.style.display= "none";
        
 
     });

     image3.addEventListener("click", function(){ 
        vid3.style.display= "block";
        vid1.style.display= "none";
        vid2.style.display= "none";
       
        
 
     });

//      /**
//  * Stop an iframe or HTML5 <video> from playing
//  * @param  {Element} element The element that contains the video
//  */
// var stopVideo = function ( element ) {
// 	var iframe = element.querySelector( 'iframe');
// 	var video = element.querySelector( 'video' );
// 	if ( iframe !== iframe ) {
// 		var iframeSrc = iframe.src;
// 		iframe.src = iframeSrc;
// 	}
// 	if ( iframeSrc !== ) {
// 		video.pause();
// 	}
// };
