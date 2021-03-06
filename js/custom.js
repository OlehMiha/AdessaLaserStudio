//Прелодер и первичные анимации
(jQuery)(document).ready(function($){ 
        var $preloader = $('.volosunov'),
            $spinner = $preloader.find('.spinner');
        $spinner.delay(650).fadeOut('slow');
        $preloader.delay(650).fadeOut('slow');
        $('.mov_zoomIn_start').css("opacity","1");
        $('.mov_zoomIn_start').addClass('animated zoomIn');
    });


(jQuery)(document).ready(function($){ 
//Отключить выделение
    window.oncontextmenu = function() {
        return false;
    } 

    document.addEventListener('mousemove',function(e){
      if( e.target.getAttribute('unselectable')=='on' )
        e.target.ownerDocument.defaultView.getSelection().removeAllRanges();
    },false);
    

    //Меню топ  
    var close = false;
    $(".button_mobi_menu").on('click', function () {
        if ($(this).hasClass('active')) {
            $('.button_mobi_menu').removeClass("active");
            close = false;
            $('.menu_div').removeClass("active");
            return;
        }
        $('.button_mobi_menu').addClass("active");
        $('.menu_div').addClass("active");
        close = true;
    }); 

    $(".menu_top li:not(.price_menu_modal)").on('click', function () {
        if(close = true){
            $('.button_mobi_menu').removeClass("active");
            $('.menu_div').removeClass("active");
            close = false;
        
        }
    }); 




//Плавный скрол
    $('.menu_top a').mPageScroll2id({
        scrollSpeed: 900,
        scrollEasing: 'swing',
        scrollingEasing: 'swing',
        offset: 50
    });

    $('a.go_a').mPageScroll2id({
        scrollSpeed: 900,
        scrollEasing: 'swing',
        scrollingEasing: 'swing',
        offset: 50
    });
//Для мобильного 
    var width_el = Number(document.documentElement.clientWidth);
    if(width_el <= 1094){
        $('.menu_top a').mPageScroll2id({
            scrollSpeed: 900,
            scrollEasing: 'swing',
            scrollingEasing: 'swing',
            offset: 100
        });

        $('a.go_a').mPageScroll2id({
            scrollSpeed: 900,
            scrollEasing: 'swing',
            scrollingEasing: 'swing',
            offset: 100
        });

        //Page Custom Scrollbar
            $(".menu_scrollbar").mCustomScrollbar({
               theme:"dark-3"
            });
    }


//Tabs
$(".tab_js." + $('.tabs_js.active').attr('data-tab')).fadeIn(200);
$('.tabs_js').on('click', function (e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
        return;
    }

    var class_tab = $(this).attr('data-tab');

    $(".tabs_js").removeClass('active');
    $(".tab_js").css('display','none');

    $(".tab_js." + class_tab).fadeIn(400);
    $(this).addClass('active');
});

//no-click
$('.no-click').on('click', function (e) {
    e.preventDefault();
});

//cards
$(".card_tile_js." + $('.click_tile_js.active').attr('data-card')).fadeIn(200);
$('.click_tile_js').on('click', function (e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
        return;
    }

    var class_tab = $(this).attr('data-card');

    $(".click_tile_js").removeClass('active');
    $(".card_tile_js").css('display','none');

    $(".card_tile_js." + class_tab).fadeIn(400);
    $(this).addClass('active');
});


//Меню топ : скрол анимация
    var h = $(window).height();
 
    if ( ($(this).scrollTop()) > $(".menu_div").offset().top ) {
        $(".menu_div").addClass('scroll');
        $(".menu_div_off").css('display', 'block');
    } 

    function go_animated_scroll() {

        $('.mov_next_fadeInUp').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+h+250) {
                $(this).addClass('animated fadeInUp');
            } else {
                $(this).removeClass('animated fadeInUp');
            }
        });


        $('.mov_tile_js').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+h) {
                $.each($(this).find('.iner_tile'), function(i, el) {
                    setTimeout(function() {
                        $(el).addClass('animated flipInX')
                    }, 0 + (i * 250));

                  });
            } else {
                $(this).find('.iner_tile').removeClass('animated flipInX');
            }
        });

        $('section ul').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+h) {
                $.each($(this).find('li'), function(i, el) {
                    setTimeout(function() {
                        $(el).addClass('animated fadeIn')
                    }, 0 + (i * 150));

                  });
            } else {
                $(this).find('li').removeClass('animated fadeIn');
            }
        });







        $('.mov_next_fadeInLeft').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+h) {
                $(this).addClass('animated fadeInLeft');
            } else {
                $(this).removeClass('animated fadeInLeft');
            }
        });

        $('.mov_next_fadeInRight').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+h) {
                $(this).addClass('animated fadeInRight');
            } else {
                $(this).removeClass('animated fadeInRight');
            }
        });


        $('.mov_next_fadeIn').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+h) {
                $(this).addClass('animated fadeIn');
            } else {
                $(this).removeClass('animated fadeIn');
            }
        });

        $('.mov_next_fadeIn_timeOut').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+h) {
                $.each($(this).find('div.col-12'), function(i, el) {
                    setTimeout(function() {
                        $(el).addClass('animated fadeIn');
                    }, 0 + (i * 300));

                  });
            } else {
                $(this).find('div.col-12').removeClass('animated fadeIn');
            }
        });


        $('.mov_slideInLeft').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+h) {
                $.each($(this).find('div.col'), function(i, el) {
                    setTimeout(function() {
                        $(el).addClass('animated fadeInLeft');
                    }, 0 + (i * 80));

                  });
            } else {
                $(this).find('div.col').removeClass('animated fadeInLeft');
            }
        }); 
    }

    if(width_el > 1094){
        go_animated_scroll();
    }

    $(window).scroll(function(){
        if ( ($(this).scrollTop()) > $(".menu_div").offset().top  ) {
            $(".menu_div").addClass('scroll');
            $(".menu_div_off").css('display', 'block');
        } 
        if ( $(this).scrollTop() < $(".menu_div_off").offset().top  ) {
            $(".menu_div").removeClass('scroll');
            $(".menu_div_off").css('display', 'none');
        }

        if(width_el > 1094){
            go_animated_scroll();
        }
    });
    




	
	

//Формы  
    $("#sps").on("click","div", function () {
            $('#sps').modal('toggle');
     });


    $("#manedj_form").submit(function() {

        var th = $(this);
        $.ajax({
            type: "POST",
            url: "zakaz.php", 
            data: th.serialize()
        }).done(function() {
            
            th.trigger("reset");
            $('#exampleModal_1').modal('toggle');
            setTimeout(function() {
                $('#sps').modal('toggle');
            },250);
        });
        return false;
    });


});