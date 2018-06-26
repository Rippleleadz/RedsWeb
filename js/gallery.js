
let car1 = document.querySelector(".car1");
let car2 = document.querySelector(".car2");
let scar1 = document.querySelector(".s-car1");
let scar2 = document.querySelector(".s-car2");
let image1 = document.querySelector(".image1");
let image2 = document.querySelector(".image2");



    image2.addEventListener("click", function(){
        scar1.style.display= "none";
        scar2.style.display= "";
        
        car1.style.display= "none";
        car2.style.display= "";
       

    });

    image1.addEventListener("click", function(){ 
        scar2.style.display= "none";
        scar1.style.display= "";
       
        car2.style.display= "none";
        car1.style.display= "";

        
 
     });
 
    

   

 



