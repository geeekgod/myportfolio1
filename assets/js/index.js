$(document).ready(function() {
    $(".menu-icon").on("click", function() {
          $("nav ul").toggleClass("showing");
    });

    // Scrolling Effect
$('a').click(function(){
      // applying again smooth scroll on menu items click
      $('html').css("scrollBehavior", "smooth");
  });

  var typed = new Typed(".typing-2", {
      strings: ["Student","Frontend Developer", "Freelancer", "Content Creator"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });


$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('nav').addClass('black');
    }

    else {
          $('nav').removeClass('black');
    }

     // scroll-up button show/hide script
     if(this.scrollY > 300){
            $('.scroll-up-btn').addClass("show");
      }
      else{
            $('.scroll-up-btn').removeClass("show");
      }
})

});
