$(function () {
  // Выпадающее меню
  $('.desktop .menu-item').hover(function () {
    $(this).find('.sub-menu').stop(true, true).slideToggle();
  });

  $('.menu-button').on('click', function (e) {
    e.preventDefault();
    $('.mobile').slideToggle();
    $(this).toggleClass('close');
  });

  // Слайдер
  $('#right').on('click', function (e) {
    var curSlide = $('.slide:visible'); // текущий сдайд
    var clientWidth = curSlide[0].clientWidth; // текущая ширина окна

    $(curSlide).prev().css({
      right: clientWidth,
      display: 'block',
    });
    $(curSlide).animate(
      {
        right: -clientWidth,
      },
      {
        duration: 300,
        start: function () {
          $(curSlide).prev().animate(
            {
              right: 0,
            },
            300
          );
        },
        done: function () {
          $(curSlide).hide();
          var doneSlide = $(curSlide).detach();
          $('.slider-wrap').prepend(doneSlide);
        },
      }
    );
  });

  $('#left').on('click', function (e) {
    var curSlide = $('.slide:visible'); // текущий сдайд
    var clientWidth = curSlide[0].clientWidth; // текущая ширина окна

    $('.slide').first().css({
      right: -clientWidth,
      display: 'block',
    });
    $(curSlide).animate(
      {
        right: clientWidth,
      },
      {
        duration: 300,
        start: function () {
          $('.slide').first().animate(
            {
              right: 0,
            },
            300
          );
        },
        done: function () {
          $(curSlide).hide();
          var doneSlide = $('.slide').first().detach();
          $('.slider-wrap').append(doneSlide);
        },
      }
    );
  });

  // Переключение режимов
  $('.mode').click(function () {
    var curId = $(this).attr('id');
    $('.mode').not(this).removeClass('active');
    $(this).addClass('active');
    $('.desk_content_5').css({
      'background-image': 'url("../img/desk_' + curId + '.jpg")',
    });
  });

  // Всплывающее окно с видео
  $('.play').on('click', function () {
    $('.overlay').fadeIn(500);
  });

  $('.overlay').click(function () {
    $(this).fadeOut(200);
  });

  // Воспроизведение видео при скролинге
  $(window).scroll(function (e) {
    var scrollPosition = $(window).scrollTop();
    var blockPositionTop = $('.luna_content_7')[0].offsetTop;
    var blockPositionBottom = $('.luna_content_7')[0].offsetHeight;
    var videoCondition = $('#fast-install').attr('data-condition');

    if (scrollPosition > blockPositionTop && scrollPosition < blockPositionTop + blockPositionBottom && videoCondition === '0') {
      $('#fast-install').trigger('play').attr('data-condition', '1');
    }
    if ((scrollPosition > blockPositionTop + blockPositionBottom && videoCondition === '1') || (scrollPosition < blockPositionTop && videoCondition === '1')) {
      $('#fast-install').attr('data-condition', '0');
    }
  });

  $(window).scroll(function (e) {
    var scrollPosition = $(window).scrollTop();
    var blockPositionTop = $('.luna_content_10')[0].offsetTop;
    var blockPositionBottom = $('.luna_content_10')[0].offsetHeight;
    var videoCondition = $('#luna-parts').attr('data-condition');

    if (scrollPosition > blockPositionTop && scrollPosition < blockPositionTop + blockPositionBottom && videoCondition === '0') {
      $('#luna-parts').trigger('play').attr('data-condition', '1');
    }
    if ((scrollPosition > blockPositionTop + blockPositionBottom && videoCondition === '1') || (scrollPosition < blockPositionTop && videoCondition === '1')) {
      $('#luna-parts').attr('data-condition', '0');
    }
  });

  $('.menu li').mouseenter(function (e) {
    var t = $(this).position().left;
    var curId = $(this).attr('id');
    $('.' + curId).css({
      left: t,
    });
    $('.item').hide();
    $('.' + curId).show();
    $('.submenu').stop(true, true).slideDown(500);
    $('.item a').stop(true, true).animate(
      {
        left: '20px',
        opacity: '0',
      },
      1000
    );
    $('.' + curId + ' a')
      .stop(true, true)
      .animate(
        {
          left: '0px',
          opacity: '1',
        },
        1000
      );
  });

  $('header .row').mouseleave(function (e) {
    $('.submenu').stop(true, true).slideUp(500);
    $('.item').hide();
    $('.item a').stop(true, true).animate(
      {
        left: '20px',
        opacity: '0',
      },
      1000
    );
  });

  $('.pop-up').click(function (e) {
    e.preventDefault();
    $('.overlay').fadeIn(300, function () {
      $('.overlay-content').fadeIn(100);
    });
  });

  $('.img-static').click(function () {
    var parentBlock = $(this).parent().attr('class');
    $(this).hide();
    $('.' + parentBlock + ' .gif').show();
  });

  $('.gif').click(function () {
    var parentBlock = $(this).parent().attr('class');
    $(this).hide();
    $('.' + parentBlock + ' .img-static').show();
  });

  $('.colors span').click(function () {
    var curColor = $(this).attr('class');
    var src = 'img/yi-lite-' + curColor + '.png';
    $('.yi-lite-color').attr('src', src);
  });

  $('.angle').click(function () {
    $('.angle').css({
      opacity: '1',
    });
    $(this).css({
      opacity: '0.5',
    });
    var curAngle = $(this).attr('id');
    console.log(curAngle);

    $('.stage img').each(function () {
      if (+$(this).attr('data-angle') > +curAngle) {
        console.log($(this).attr('data-angle'));
        $(this).css({
          opacity: '0.5',
        });
      } else {
        $(this).css({
          opacity: '1',
        });
      }
    });
  });

  $('.play').click(function () {
    $('#dash-lens').trigger('play');
  });

  $('.dash-example').click(function () {
    var curSrcVideo = $(this).attr('data-video');
    $('.overlay-video-content video').attr('src', curSrcVideo);
    $('.overlay-video').fadeIn(300, function () {
      $('.overlay-video-content').fadeIn(100);
    });
  });

  /* $(".menu-button").click(function () {
        $(".mobile-menu").slideToggle();
        $(this).toggleClass('close');
    }) */

  $('.prew-img').click(function () {
    $(this).siblings('.large-img').attr('src', $(this).attr('src'));
  });

  $('.mood').mouseenter(function () {
    $('.mood-photo').attr('src', '../img/galaxy-mood-photo_0' + $(this).attr('data-mood') + '.jpg');
  });

  $('.color-switch>span').mouseenter(function () {
    $('.galaxy_content_6').css('background-image', "url('../img/galaxy-" + $(this).attr('id') + ".jpg')");
  });

  // Mobile menu
  $('.menu-item__inner').on('click touch', function (e) {
    e.preventDefault();
    $(this).find('span').toggleClass('arrow-down');
    $(this).next().slideToggle();
  });

  /*setInterval(function(){
        $(".slide:visible").fadeOut(400, function(){
            $(this).next(".slide").fadeIn(400);
            var currentSlide = $(this).detach();
            $('.slider-holder').append(currentSlide);
        })}, 3000)*/

  /*   var jsonSource = '../js/price.json?' + Date.now();
      $.getJSON(jsonSource, function(data){
          $('.rrp').each(function(){
              var nameItem = $(this).siblings('.name').text();
              $(this).text(data[nameItem]);
          })
      }) */
});
