
      var backToTopBtn = $('#backToTop');
    if (backToTopBtn.length) {
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 300) {
                backToTopBtn.fadeIn();
            } else {
                backToTopBtn.fadeOut();
            }
        });
        backToTopBtn.on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, 700);
        });
    }
/*nav*/
$( "#nav-btn" ).on( "click", function() {
    $('#takeover-nav').toggleClass("shown");
    $('.sticky-nav').toggleClass("difference");
  });

  

// Smooth scroll for nav links, card hover, header scroll, contact form, back to top
$(document).ready(function() {
    $('.nav a').on('click', function(e) {
        var target = $(this.hash);
        if (target.length) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - 70
            }, 700);
        }
    });

    $('.card').hover(
        function() {
            $(this).addClass('shadow-lg').css('transform', 'scale(1.05)');
        },
        function() {
            $(this).removeClass('shadow-lg').css('transform', 'scale(1)');
        }
    );

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });
 

$(function() {
  $('#contactForm').on('submit', function(e) {
    e.preventDefault();
    // محاكاة إرسال النموذج
    $('#formMsg').hide().removeClass('text-danger text-success');
    var name = $('#name').val().trim();
    var email = $('#email').val().trim();
    var message = $('#message').val().trim();
    if(name && email && message) {
      $('#formMsg').addClass('text-success').text('تم إرسال رسالتك بنجاح! سنقوم بالرد قريباً.').fadeIn();
      this.reset();
    } else {
      $('#formMsg').addClass('text-danger').text('يرجى ملء جميع الحقول.').fadeIn();
    }
  });
}); 


});
 
