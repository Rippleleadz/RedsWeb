$(document).ready(function() {
    $('#section-b a').each(function() {
      var data = $(this).attr('data');
      $(this).append('<img src="http://img.youtube.com/vi/'+data+'/maxresdefault.jpg" />');
    });
  
    $('#section-b a').click(function() {
      var data = $(this).attr('data');
      $('#loader').append('<iframe src="https://www.youtube.com/embed/'+data+'?autoplay=1" frameborder="0" allowfullscreen rel=0 ></iframe>');
      $('#overlay').fadeIn(250);
    });
  
    $('#close').click(function() {
      $('#overlay').fadeOut(250,function() {
        $('#loader').html('');
      });
    });
  });
