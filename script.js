$(document).ready(function() {

  $('.color-choose input').on('click', function() {
      var watchColor = $(this).attr('data-image');

      $('.active').removeClass('active');
      $('.left-column img[data-image = ' + watchColor + ']').addClass('active');
      $(this).addClass('active');
  });

});
