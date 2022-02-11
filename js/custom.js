//Humburger menu
let menuButton = document.getElementById("menuButton");
let menuLinks = document.querySelector(".menu-links")
menuButton.addEventListener('click',function(){
  menuLinks.classList.toggle("show");
});

var slideImg = document.getElementById("slidImage");
let images =[
    "./assets/img/turkia/adrbijan1.jpg"
    // "./assets/img/hero3.jpg",
    // "./assets/img/hero4.jpg",
    // "./assets/img/hero5.jpg",
    // "./assets/img/hero6.jpg",
    // "./assets/img/hero7.jpg"
];

var length = images.length;
var i = 0;

function slider(){
    if(i > length-1 ){
        i =0;
    }
    slideImg.src  = images[i];
    i++;
    setTimeout('slider()',3000);
}


//OWL carousel slide
$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay: true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:true
        },
        1000:{
            items:4,
            nav:true,
            loop:true
        }
    }
})



//On scroll animation
AOS.init({
    delay: 1, // values from 0 to 3000, with step 50ms
  duration: 400,
});