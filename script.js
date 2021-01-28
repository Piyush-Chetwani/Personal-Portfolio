$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Student", "Developer", "Blogger", "Learner"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Student", "Developer", "Blogger", "Learner"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

function myFunction() {
   var body = document.getElementById("body");
   body.classList.toggle("dark-mode");
   var desc = document.getElementById("desc");
   desc.classList.toggle("typing-2");
   desc.classList.toggle("desc-dark");
   var nav = document.getElementById("nav");
   nav.classList.toggle("sticky");
   nav.classList.toggle("sticky-dark");
   var flip = document.getElementById("flip");
   flip.classList.toggle("flip-card-back");
   flip.classList.toggle("flip-card-back-dark");
   var btn = document.getElementById("btn");
   btn.classList.toggle("ini");
   btn.classList.toggle("ini-dark");
   var read = document.getElementById("read");
   read.classList.toggle("read");
   read.classList.toggle("read-dark");
   var line = document.getElementsByClassName("lineClass");
   for(var i=0;i<line.length;i++){
     line[i].classList.toggle("line");
     line[i].classList.toggle("line-dark");
   }
   var cont = document.getElementsByClassName("cont");
   for(var i=0;i<cont.length;i++){
     cont[i].classList.toggle("divs");
     cont[i].classList.toggle("divs-dark");
   }
   var myteam = document.getElementById("myteam")
   myteam.classList.toggle("myteam");
   myteam.classList.toggle("myteam-dark");
   // document.getElementByClassName("owl-dot").style.background="2px solid red!important";
   var fas = document.getElementsByClassName("log");
   for(var i=0;i<fas.length;i++){
     fas[i].classList.toggle("icon");
     fas[i].classList.toggle("icon-dark");
     console.log(fas[i]);
   }
   var arr = document.getElementById("arr")
   arr.classList.toggle("scroll-up-btn");
   arr.classList.toggle("scroll-up-btn-dark");

}
