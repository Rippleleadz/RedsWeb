let svid1 = document.querySelector(".s-vid1");
let svid2 = document.querySelector(".s-vid2");
let svid3 = document.querySelector(".s-vid3");
let image1 = document.querySelector(".image1");
let image2 = document.querySelector(".image2");
let image3 = document.querySelector(".image3");



    image1.addEventListener("click", function(){
        svid1.style.display= "block";
        svid2.style.display= "none";
        svid3.style.display= "none";
       

    });

    image2.addEventListener("click", function(){ 
        svid2.style.display= "block";
        svid1.style.display= "none";
        svid3.style.display= "none";
        
 
     });

     image3.addEventListener("click", function(){ 
        svid3.style.display= "block";
        svid1.style.display= "none";
        svid2.style.display= "none";
       
        
 
     });