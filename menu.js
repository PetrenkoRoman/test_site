
		$(document).ready(function(){
			// Фиксированная шапка при скролле
			$("#header").removeClass("default");
			$(window).scroll(function(){
				if ($(this).scrollTop() > 20) {
					$("#header").addClass("default").fadeIn('fast');
				} else {
					$("#header").removeClass("default").fadeIn('fast');
				};
			});

			// Плавный скролл по якорям
			$('a[href^="#"]').click(function () { 
			    elementClick = $(this).attr("href");
				destination = $(elementClick).offset().top;
				if($.browser.safari){
				$('body').animate( { scrollTop: destination }, 500 );
				} else {
			    	$('html').animate( { scrollTop: destination }, 500 );
				}
				return false;
		   });
		});
		

	$(document).ready(function(){
	$('.nav a[href^="#'+location.pathname.split("#")[1]+'"]').addClass('active');
	});
	
	
