$(document).ready(function() {

//	кликабельные блоки
	$('div.project_item').click(function(){
		window.location=$(this).find('a').attr('href');
		return false;
	})


    //появление/скрытие поля поиска
    $(".searchbutton").click(function() {
        $(".searchform_wrapper").toggleClass("searchform_wrapper_baccolor");
    });


//	Выпадающее главное меню
    $('nav ul.main_menu li').hover(function () {
        clearTimeout($.data(this,'timer'));
        $('ul',this).stop(true,true).fadeIn(200);
    }, function () {
        $.data(this,'timer', setTimeout($.proxy(function() {
            $('ul',this).stop(true,true).fadeOut(200);
        }, this), 100));
    });
    if ( $("ul.main_menu li ul").length) {
                $("ul.main_menu li ul").parent( "li" ).addClass("full_menuitem");
    }




//Полароид слайды на главной

        $( "div#gallery ul li:first-child img" ).attr("style","opacity:1;");
        $( ".ui-draggable" ).draggable();
        $( "div#gallery ul li" ).mousedown(function() {
            $( "div#gallery ul li:first-child img" ).removeAttr("style");
            if( $("div#gallery ul li").hasClass("good_visibility")){
                $("div#gallery ul li").removeClass("good_visibility")
            }
            $(this).addClass("good_visibility");
        });



    //инициализация карусели

        $('.slidewrap2').carousel({
            slider: '.slider',
            slide: '.slide',
            addNav: false,
            addPagination: true,
            speed: 800 // ms.
        });
        $('.slidewrap3').carousel({
            slider: '.slider',
            slide: '.slide',
            addNav: true,
            addPagination: true,
            speed: 2000 // ms.
        });



    $("section article ol li").map(function(i, o) {
        var num = i+1;
        $(o).prepend("<span class='numlist'>"+num+".</span>");
    });



    //Скрытие навигации, если кол-во картинок в каруселе меньше, либо равно 4
    $(document).ready(function() {
       var kolvoimagesnav = $("div.good_sec_gallery div.jcarousel_sec-wrapper div.jcarousel_sec ul li").size();
       var kolvoimagesnav2 = $("div.good_sec_gallery2 div.jcarousel_sec-wrapper div.jcarousel_sec ul li").size();
        if (kolvoimagesnav <= 4) {
            $("div.good_sec_gallery div.jcarousel_sec-wrapper a.jcarousel_sec-control-prev").hide();
            $("div.good_sec_gallery div.jcarousel_sec-wrapper a.jcarousel_sec-control-next").hide();
            $("div.good_sec_gallery div.jcarousel_sec-wrapper p").hide()
        } else {
            return false
        }
        if (kolvoimagesnav2 <= 4) {
            $("div.good_sec_gallery div.jcarousel_sec-wrapper a.jcarousel_sec-control-prev").hide();
            $("div.good_sec_gallery div.jcarousel_sec-wrapper a.jcarousel_sec-control-next").hide();
            $("div.good_sec_gallery div.jcarousel_sec-wrapper p").hide()
        } else {
            return false
        }
        });





//Плавные якоря
    $(function(){
        $('span.yaktoh1 a[href^="#"]').click(function(){
            var target = $(this).attr('href');
            $('html, body').animate({scrollTop: $(target).offset().top}, 800);
            return false;
        });
    });


//    Инициализация fancybox
	$(document).ready(function() {
		$("a.fancybox").fancybox();
	});



//карусель нескольких элементов (инициализация)

    (function($) {
        $(function() {
            var jcarousel = $('.jcarousel_sec');
            jcarousel
                .on('jcarousel:reload jcarousel:create', function () {
                    var width = jcarousel.innerWidth();

                    if (width >= 600) {
                        width = width / 4;
                    } else if (width >= 350) {
                        width = width / 2;
                    }
                    jcarousel.jcarousel('items').css('width', width + 'px');
                })
                .jcarousel({
                    wrap: 'circular'
                });
            $('.jcarousel_sec-control-prev')
                .jcarouselControl({
                    target: '-=1'
                });
            $('.jcarousel_sec-control-next')
                .jcarouselControl({
                    target: '+=1'
                });
            $('.jcarousel_sec-pagination')
                .on('jcarouselpagination:active', 'a', function() {
                    $(this).addClass('active');
                })
                .on('jcarouselpagination:inactive', 'a', function() {
                    $(this).removeClass('active');
                })
                .on('click', function(e) {
                    e.preventDefault();
                })
                .jcarouselPagination({
                    perPage: 1,
                    item: function(page) {
                        return '<a href="#' + page + '">' + page + '</a>';
                    }
                });
        });
    })(jQuery);



//    ЛК переключение вкдадок
    $("div.lk_bookmarks_items a").click(function() {
        if ( $(this).hasClass("unactive_item_menu") ) {
            $("div.lk_bookmarks_items a").toggleClass("active_item_menu");
            $("div.lk_bookmarks_items a").toggleClass("unactive_item_menu");
            $("div.page_content div.lk_pers_subsc").toggleClass("active_lk_pers_subsc");
            $("div.page_content div.lk_pers_subsc").toggleClass("unactive_lk_pers_subsc");
        }
else{
            return false
        }
    });









//	Инициализация datepicker
    $(function() {
        $( "#pers_date" ).datepicker();
    });
    $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: '&#x3c;Пред',
        nextText: 'След&#x3e;',
        currentText: 'Сегодня',
        monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
            'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
            'Июл','Авг','Сен','Окт','Ноя','Дек'],
        dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
        dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
        dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false
    };
    $.datepicker.setDefaults($.datepicker.regional['ru']);
    $('input.datepicker').datepicker({
        showOn: 'both',
        buttonImageOnly: true,
        buttonImage: '/images/026.png'
    });
});




