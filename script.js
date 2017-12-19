$(document).ready(function() {

  //wrap

  $('.wrap').click(function() {
    $('.box').css("width", "33.333%");
    $('.container').css('flex-wrap', 'wrap');
  });

  $('.wrap-reverse').click(function() {
    $('.box').css("width", "33.333%");
    $('.container').css('flex-wrap', 'wrap-reverse');
  });

  $('.nowrap').click(function() {
    $('.container').css('flex-wrap', 'nowrap');
    $('.box').css("width", "auto");
  });

  //direction

  $('.row').click(function() {
    $('.container').css('flex-direction', 'row');
  });

  $('.column').click(function() {
    $('.container').css('flex-direction', 'column');
  });

  //justify

  $('.space-between').click(function() {
    $('.box5').css('flex-grow', '0');
    $('.box10').css('flex-grow', '0');
    $('.box').css("width", "auto");
    $('.container').css('justify-content', 'space-between');
  });

  $('.space-around').click(function() {
    $('.box5').css('flex-grow', '0');
    $('.box10').css('flex-grow', '0');
    $('.box').css("width", "auto");
    $('.container').css('justify-content', 'space-around');
  });

  $('.flex-center').click(function() {
    $('.box5').css('flex-grow', '0');
    $('.box10').css('flex-grow', '0');
    $('.box').css("width", "auto");
    $('.container').css('justify-content', 'center');
  });

  $('.flex-start').click(function() {
    $('.box5').css('flex-grow', '0');
    $('.box10').css('flex-grow', '0');
    $('.box').css("width", "auto");
    $('.container').css('justify-content', 'flex-start');
  });

  $('.flex-end').click(function() {
    $('.box5').css('flex-grow', '0');
    $('.box10').css('flex-grow', '0');
    $('.box').css("width", "auto");
    $('.container').css('justify-content', 'flex-end');
  });

  //grow

  $('.flex-grow').click(function() {
    $('.box5').css('flex-grow', '1');
  });

  $('.flex-grow2').click(function() {
    $('.box5').css('flex-grow', '1');
    $('.box10').css('flex-grow', '2');
  });


  //reset

  $('.reset').click(function() {
    location.reload();
  });
});
