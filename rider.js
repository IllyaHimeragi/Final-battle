$(function(){
$('.btn-dark').click(function(event) {  
  $('#Sakura').toggle();
  });
$('.btn-danger').click(function(event) {  
  $('#Illya').slideToggle();
  });
$('.btn-info').click(function(event) {  
  $('#Rin').hide(100).show(100);
  });
$('.btn-light').click(function(event) {  
  $('#Tamamo').toggleClass('chan');
  });
$('.btn-success').click(function(event) {  
  $('#Medusa').html('Watashi wa yamidesu');
  });

});



