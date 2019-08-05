$(document).ready(function(){

        $('.handle').click(function(){
                $('nav ul').toggleClass('show');
        })

        $('.handle').click(function() {
		$('.hero h2').toggle();
		$('.hero h3').toggle();
	});
});