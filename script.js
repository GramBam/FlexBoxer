$(document).ready(function() {
  $('.wrap').click(function() {
    $('.container').css('flex-wrap', 'wrap');
  });

  $('.wrap-reverse').click(function() {
    $('.container').css('flex-wrap', 'wrap-reverse');
  });
});
