
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

  
  ///Initiation Variables
  var icon_1 = document.getElementById("nav-btn");
  var topLine_1 = document.getElementById("top-line-1");
  var middleLine_1 = document.getElementById("middle-line-1");
  var bottomLine_1 = document.getElementById("bottom-line-1");
  var state_1 = "menu";  // can be "menu" or "arrow"
  var topLineY_1;
  var middleLineY_1;
  var bottomLineY_1;
  var topLeftY_1;
  var topRightY_1;
  var bottomLeftY_1;
  var bottomRightY_1;
  var topLeftX_1;
  var topRightX_1;
  var bottomLeftX_1;
  var bottomRightX_1;
  
  ///Animation Variables
  var segmentDuration_1 = 15;
  var menuDisappearDurationInFrames_1 = segmentDuration_1;
  var arrowAppearDurationInFrames_1 = segmentDuration_1;
  var arrowDisappearDurationInFrames_1 = segmentDuration_1;
  var menuAppearDurationInFrames_1 = segmentDuration_1;
  var menuDisappearComplete_1 = false;
  var arrowAppearComplete_1 = false;
  var arrowDisappearComplete_1 = false;
  var menuAppearComplete_1 = false;
  var currentFrame_1 = 1;
  
  ///Menu Disappear 
  function menuDisappearAnimation_1() {
      currentFrame_1++;
      if ( currentFrame_1 <= menuDisappearDurationInFrames_1 ) {
          window.requestAnimationFrame( ()=> { 
              //top line
              topLineY_1 = AJS.easeInBack( 37, 50, menuDisappearDurationInFrames_1, currentFrame_1 );
              topLine_1.setAttribute( "d", "M30,"+topLineY_1+" L70,"+topLineY_1 );
              //bottom line
              bottomLineY_1 = AJS.easeInBack( 63, 50, menuDisappearDurationInFrames_1, currentFrame_1 );
              bottomLine_1.setAttribute( "d", "M30,"+bottomLineY_1+" L70,"+bottomLineY_1 );
              //recursion
              menuDisappearAnimation_1();
          });
      } else {
          middleLine_1.style.opacity = "0";
          currentFrame_1 = 1;
          menuDisappearComplete_1 = true;
          openMenuAnimation_1();
      }
  }
  
  ///Cross Appear
  function arrowAppearAnimation_1() {
      currentFrame_1++;
      if ( currentFrame_1 <= arrowAppearDurationInFrames_1 ) {
          window.requestAnimationFrame( ()=> { 
              //top line
              topLeftX_1 = AJS.easeOutBack( 30, 35, arrowAppearDurationInFrames_1, currentFrame_1 );
              topLeftY_1 = AJS.easeOutBack( 50, 35, arrowAppearDurationInFrames_1, currentFrame_1 );
              bottomRightX_1 = AJS.easeOutBack( 70, 65, arrowAppearDurationInFrames_1, currentFrame_1 );
              bottomRightY_1 = AJS.easeOutBack( 50, 65, arrowAppearDurationInFrames_1, currentFrame_1 );
              topLine_1.setAttribute( "d", "M" + topLeftX_1 + "," + topLeftY_1 + " L" + bottomRightX_1 + "," + bottomRightY_1 );
              //bottom line
              bottomLeftX_1 = AJS.easeOutBack( 30, 35, arrowAppearDurationInFrames_1, currentFrame_1 );
              bottomLeftY_1 = AJS.easeOutBack( 50, 65, arrowAppearDurationInFrames_1, currentFrame_1 );
              topRightX_1 = AJS.easeOutBack( 70, 65, arrowAppearDurationInFrames_1, currentFrame_1 );
              topRightY_1 = AJS.easeOutBack( 50, 35, arrowAppearDurationInFrames_1, currentFrame_1 );
              bottomLine_1.setAttribute( "d", "M" + bottomLeftX_1 + "," + bottomLeftY_1 + " L" + topRightX_1 + "," + topRightY_1 );
              //recursion
              arrowAppearAnimation_1();
          });
      } else {
          currentFrame_1 = 1;
          arrowAppearComplete_1 = true;
          openMenuAnimation_1();
      }
  }
  
  ///Combined Open Menu Animation
  function openMenuAnimation_1() {
      if ( !menuDisappearComplete_1 ) { 
          menuDisappearAnimation_1();
      } else if ( !arrowAppearComplete_1) {
          arrowAppearAnimation_1();
      }
  }
  
  ///Cross Disappear
  function arrowDisappearAnimation_1() {
      currentFrame_1++;
      if ( currentFrame_1 <= arrowDisappearDurationInFrames_1 ) {
          window.requestAnimationFrame( ()=> {
              //top line
              topLeftX_1 = AJS.easeInBack( 35, 30, arrowDisappearDurationInFrames_1, currentFrame_1 );
              topLeftY_1 = AJS.easeInBack( 35, 50, arrowDisappearDurationInFrames_1, currentFrame_1 );
              bottomRightX_1 = AJS.easeInBack( 65, 70, arrowDisappearDurationInFrames_1, currentFrame_1 );
              bottomRightY_1 = AJS.easeInBack( 65, 50, arrowDisappearDurationInFrames_1, currentFrame_1 );
              topLine_1.setAttribute( "d", "M" + topLeftX_1 + "," + topLeftY_1 + " L" + bottomRightX_1 + "," + bottomRightY_1 );
              //bottom line
              bottomLeftX_1 = AJS.easeInBack( 35, 30, arrowDisappearDurationInFrames_1, currentFrame_1 );
              bottomLeftY_1 = AJS.easeInBack( 65, 50, arrowDisappearDurationInFrames_1, currentFrame_1 );
              topRightX_1 = AJS.easeInBack( 65, 70, arrowDisappearDurationInFrames_1, currentFrame_1 );
              topRightY_1 = AJS.easeInBack( 35, 50, arrowDisappearDurationInFrames_1, currentFrame_1 );
              bottomLine_1.setAttribute( "d", "M" + bottomLeftX_1 + "," + bottomLeftY_1 + " L" + topRightX_1 + "," + topRightY_1 );
              //recursion
              arrowDisappearAnimation_1();
          });
      } else {
          middleLine_1.style.opacity = "1";
          currentFrame_1 = 1;
          arrowDisappearComplete_1 = true;
          closeMenuAnimation_1();
      }
  }
  
  ///Menu Appear
  function menuAppearAnimation_1() {
      currentFrame_1++;
      if ( currentFrame_1 <= menuAppearDurationInFrames_1 ) {
          window.requestAnimationFrame( ()=> {
              //top line
              topLineY_1 = AJS.easeOutBack( 50, 37, menuDisappearDurationInFrames_1, currentFrame_1 );
              topLine_1.setAttribute( "d", "M30,"+topLineY_1+" L70,"+topLineY_1 );
              //bottom line
              bottomLineY_1 = AJS.easeOutBack( 50, 63, menuDisappearDurationInFrames_1, currentFrame_1 );
              bottomLine_1.setAttribute( "d", "M30,"+bottomLineY_1+" L70,"+bottomLineY_1 );
              //recursion
              menuAppearAnimation_1();
          });
      } else {
          currentFrame_1 = 1;
          menuAppearComplete_1 = true;
          closeMenuAnimation_1();
      }
  }
  
  ///Close Menu Animation
  function closeMenuAnimation_1() {
      if ( !arrowDisappearComplete_1 ) {
          arrowDisappearAnimation_1();
      } else if ( !menuAppearComplete_1 ) {
          menuAppearAnimation_1();
      }
  }
  
  ///Events
  icon_1.addEventListener( "click", ()=> { 
   
    if ( state_1 === "menu" ) {
        openMenuAnimation_1();
        state_1 = "arrow";
        arrowDisappearComplete_1 = false;
          menuAppearComplete_1 = false;
    } else if ( state_1 === "arrow" ) {
        closeMenuAnimation_1();
        state_1 = "menu";
        menuDisappearComplete_1 = false;
          arrowAppearComplete_1 = false;
    }
  });
  
  //end nav 

// إضافة كلاس الأنيميشن لكل section
$('section').addClass('fade-section').css('opacity', 0);

function fadeInSectionOnView() {
    $('.fade-section').each(function() {
        var $section = $(this);
        var sectionTop = $section.offset().top;
        var sectionBottom = sectionTop + $section.outerHeight();
        var winTop = $(window).scrollTop();
        var winBottom = winTop + $(window).height();

        if (winBottom > sectionTop && winTop < sectionBottom) {
            if (!$section.hasClass('fade-in-activated')) {
                $section.addClass('fade-in-activated').css({
                    'animation': 'fadeInUp 2s ease-in-out forwards, fadeIn 3s ease-in-out forwards',
                    'opacity': 1
                });
            }
        }
    });
}

$(document).ready(function() {
    fadeInSectionOnView(); // تشغيل الحركة عند تحميل الصفحة
    $(window).on('scroll', fadeInSectionOnView);
});
// حركة الإحصائيات
$(document).ready(function() {
    function animateStats() {
        $('.stat-number').each(function(i) {
            var $this = $(this);
            var countTo = parseInt($this.attr('data-count'), 10);
            setTimeout(function() {
                $this.addClass('stat-animate');
                $({ countNum: 0 }).animate({ countNum: countTo }, {
                    duration: 1200,
                    easing: 'swing',
                    step: function() {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $this.text(countTo);
                        setTimeout(function() {
                            $this.removeClass('stat-animate');
                        }, 600);
                    }
                });
            }, i * 200);
        });
    }

    var statsAnimated = false;

    function checkStatsAnimation() {
        var statsOffset = $('.stats-table-container').offset().top - $(window).height() + 100;
        if (!statsAnimated && $(window).scrollTop() > statsOffset) {
            animateStats();
            statsAnimated = true;
        }
    }
    function resetStatsIfOutOfView() {
        var statsTop = $('.stats-table-container').offset().top;
        var statsBottom = statsTop + $('.stats-table-container').outerHeight();
        var winTop = $(window).scrollTop();
        var winBottom = winTop + $(window).height();

        if (statsAnimated && (winBottom < statsTop || winTop > statsBottom)) {
            statsAnimated = false;
            $('.stat-number').text('0');
        }
        if (!statsAnimated && winBottom > statsTop + 100) {
            animateStats();
            statsAnimated = true;
        }
    }
    $(window).on('scroll', function() {
        checkStatsAnimation();
        $('.stat-number').each(function() {
            var $this = $(this);
            var offsetTop = $this.offset().top - $(window).height() + 100;
            if ($(window).scrollTop() > offsetTop && !$this.hasClass('stat-animate')) {
                $this.addClass('stat-animate');
                $this.text($this.attr('data-count'));
            }
        });
        resetStatsIfOutOfView();
    });
    if ($('.stats-table-container').length && $(window).scrollTop() > $('.stats-table-container').offset().top - $(window).height() + 100) {
        animateStats();
        statsAnimated = true;
    }
    $('.stat-number').on('mouseenter', function() {
        $(this).addClass('stat-animate');
    }).on('mouseleave', function() {
        $(this).removeClass('stat-animate');
    });
});

       // حركة عند تمرير الماوس على عناصر القائمة
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {  
    link.addEventListener('mouseenter', function() {
        this.classList.add('animate__animated', 'animate__pulse');
    }
    );
    link.addEventListener('mouseleave', function() {
        this.classList.remove('animate__animated', 'animate__pulse');
    }
    );
});
// حركة عند تمرير الماوس على زر القائمة المنسدلة
const dropdownLinks = document.querySelectorAll('.dropdown-item');
dropdownLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.classList.add('animate__animated', 'animate__fadeIn');
    }
    );
    link.addEventListener('mouseleave', function() {
        this.classList.remove('animate__animated', 'animate__fadeIn');
    }
    );
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
 
