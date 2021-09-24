jQuery(function($){
    $('.bg-slider').slick({
        dots: true,
        arrows: false,
        swipe: false,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 800,
    });
    $('.prod-slider').slick({
        dots: true,
        infinite: false,
        loop: true,
        arrows: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1441,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 770,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 770,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
      $('.partners-slider').slick({
        infinite: true,
        dots: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }
        ]
      });
      $('.policy-slider').slick({
        dots: true
      });
      $('.qual-slider').slick({
        arrows: true
      });
      $('.certif-slider').slick({
        arrows: true,
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
      });
      $('.product-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-gallery'
      });
      $('.slider-gallery').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.product-slider',
        dots: false,
        arrows: true,
        centerMode: true,
        focusOnSelect: true
      });
      $('.vacancy-title').click(function(){
        $(this).toggleClass('clicked');
        $(this).siblings('.vacancy-content').toggleClass('vac-active');
        if($('.vacancy-title').hasClass('clicked')){
          $(this).children('svg').css('transform', 'rotate(90deg)');
          $(this).children('.vacancy-name').css('color', '#10069F');
        }else{
          $(this).children('svg').css('transform', 'rotate(270deg)');
          $(this).children('.vacancy-name').css('color', '#2A2D26');
        }
      })
      $('.single-slider').slick({
        arrows: true
      });
      $('.news-slider').slick({
        arrows: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 760,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              vertical: true
            }
          }
        ]
      });
      function burgerMenu(selector) {
        let menu = $(selector);
        let button = menu.find('.burger-menu_button', '.burger-menu_lines');
        let links = menu.find('.burger-menu_link');
        let overlay = menu.find('.burger-menu_overlay');
        
        button.on('click', (e) => {
          e.preventDefault();
          toggleMenu();
        });
        
        links.on('click', () => toggleMenu());
        overlay.on('click', () => toggleMenu());
        
        function toggleMenu(){
          menu.toggleClass('burger-menu_active');
          
          if (menu.hasClass('burger-menu_active')) {
            $('body').css('overlow', 'hidden');
          } else {
            $('body').css('overlow', 'visible');
          }
        }
      }
      
      burgerMenu('.burger-menu');
      $('.burger-menu_button:first-child').click(function(){
        $('.burger-menu_button:last-child').removeClass('hide');
        $(this).addClass('hide');
      })
      $('.burger-menu_button:last-child').click(function(){
        $(this).addClass('hide');
        $('.burger-menu_button:first-child').removeClass('hide');
      })
})