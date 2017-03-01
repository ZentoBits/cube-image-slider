"use-strict"

$('#controls').on('click', 'span', function() {
  $('#cube').css('transform', 'rotateY('+($(this).index() * -90)+'deg)');
  $('#controls span').removeClass('selected');
  $(this).addClass('selected');
})
