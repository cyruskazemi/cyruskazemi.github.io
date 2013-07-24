$('#about').waypoint(function(){
	console.log('waypoint');
	$('#nav_panel').toggleClass('active');
}, { offset: '25%' });