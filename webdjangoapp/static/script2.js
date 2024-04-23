$(".testimonialsliderarea").owlCarousel({
    items : 4,
    nav:true,
    navText:['<i class="fa fa-arrow-left"></i>','<i class="fa fa-arrow-right"></i>'],
    margin: 30,  
    
    responsive:{
      320:{
        items:1
      },
      767:{
        items:2
      },
      600:{
        items:2
      },
      1000:{
        items:3
      }
    }
    
  });




  function dropdownfunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  function adjusttext(){
     var dots= document.getElementById("dots");
     var moretext= document.getElementById("more");
     var buttontext = document.getElementById("buttontext"); 

    


     if(dots.style.display === "none"){
              dots.style.display= "inline";
              buttontext.innerHTML= "Read more";
              moretext.style.display= "none";
     }
     else{
      dots.style.display= "none";
      buttontext.innerHTML= "Read less";
      moretext.style.display= "inline"; }  }






function accepttermsandconditions()
{ alert("Terms and Conditions accepted successfully.");  

location.replace("/"); }


function declinetermsandconditions(){ confirm("You have to accept Terms and Conditions.");}


function bookhotelnow(){ location.replace("/bookahotel")}