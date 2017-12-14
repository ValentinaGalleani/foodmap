/*vista splash*/
$(document).ready(function(){
  $('.vista-principal').hide();
	setInterval(function(){
		$('.pantalla-inicio').fadeOut();
    $('.vista-principal').show();
	}, 4000);

  $('#comida-china').click(function(){
    $('.dropdown-menu').hide();
    $('.japon, .italia').hide();
  });

  $('#comida-japonesa').click(function() {
    $('.dropdown-menu').hide();
    $('.china, .italia').hide();
  });

  $('#comida-italiana').click(function() {
    $('.dropdown-menu').hide();
    $('.china, .japon').hide();
  });

  $('.filtro').click(function(){
    $('.dropdown-menu').show();
    $('.china, .japon, .italia').show();
  });
  //modal
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus()
  });   
});
/*Mouseover*/

/*$('.contenedor').mouseover(function () {
    $('.name-food').show();
}).mouseout(function () {
    $('.name-food').hide();
  
});

$('.cont').mouseover(function () {
    $('.name-food2').show();
}).mouseout(function () {
    $('.name-food2').hide();
  
});*/


