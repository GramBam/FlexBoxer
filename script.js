$(document).ready(function() {

  //wrap

  $('.wrap').click(function() {
    $('.container').css('flex-wrap', 'wrap');
  });

  $('.wrap-reverse').click(function() {
    $('.container').css('flex-wrap', 'wrap-reverse');
  });

  $('.nowrap').click(function() {
    $('.container').css('flex-wrap', 'nowrap');
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
    $('.box').css("width", "100px");
    $('.container').css('justify-content', 'space-between');
  });

  //reset

  $('.reset').click(function() {
    location.reload();
  });
});
