$(document).ready(function(){
	setInterval(function(){
			$('.pantalla-inicio').fadeOut();
	}, 4000);
});

$('.contenedor').mouseover(function () {
    $('.name-food').show();
}).mouseout(function () {
    $('.name-food').hide();
  
});

$('.cont').mouseover(function () {
    $('.name-food2').show();
}).mouseout(function () {
    $('.name-food2').hide();
  
});

