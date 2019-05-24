$(function(){
$('.btn-dark').click(function(event) {  
  $('#Sakuya').toggle();
  });
$('.btn-danger').click(function(event) {  
  $('#Illya').slidetoggle();
  });
$('.btn-info').click(function(event) {  
  $('#Rin').hide(10).show(10);
  });
$('.btn-light').click(function(event) {  
  $('#Tamamo').toggleClass('chan');
  });
$('.btn-success').click(function(event) {  
  $('#Medusa').html('Code of hours');
  });

});



